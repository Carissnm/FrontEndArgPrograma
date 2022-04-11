import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TokenService } from '../security/Service/token.service';
import { Proyecto } from './proyectos';
import { ProyectosService } from './proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public proyectos: Proyecto[];
  public editProyectos: Proyecto;
  public deleteProyectos: Proyecto;
  roles: string[];
  isAdmin: boolean = false;
  

  constructor(private proyectosService: ProyectosService,
    private tokenService: TokenService
    ) { }

  ngOnInit() {
    this.getProyectos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( role => {
      if(role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
  }

  public getProyectos(): void {
    this.proyectosService.getProyectos().subscribe(
      (response:Proyecto[]) => {
        this.proyectos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddProyecto(addForm: NgForm):void {
    document.getElementById('add-proyecto-modal')?.click();
    this.proyectosService.addProyecto(addForm.value).subscribe(
      (response: Proyecto) => {
        console.log(response);
        this.getProyectos();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
    
  }

  public onUpdateProyecto(proyecto: Proyecto):void {
      this.proyectosService.updateProyecto(proyecto).subscribe(
      (response: Proyecto) => {
        console.log(response);
        this.getProyectos();
        
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
    
  }

  public onDeleteProyecto(id: number):void {
    this.proyectosService.deleteProyecto(id).subscribe(
    (response: void) => {
      console.log(response);
      this.getProyectos();
      
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
  
}

  public onOpenModal(proyecto: Proyecto, mode: string): void{
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if (mode === 'add') {
    button.setAttribute('data-target', '#addProyectoModal');
  }
  if (mode === 'edit') {
    this.editProyectos = proyecto;
    button.setAttribute('data-target', '#updateProyectoModal');
  }
  if (mode === 'delete') {
    this.deleteProyectos = proyecto;
    button.setAttribute('data-target', '#deleteProyectoModal');
  }
  container?.appendChild(button);
  button.click();
}

}
