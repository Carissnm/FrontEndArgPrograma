import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TokenService } from '../security/Service/token.service';
import { Experiencia } from './experiencialaboral';
import { ExperiencialaboralService } from './experiencialaboral.service';

@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.css']
})
export class ExperiencialaboralComponent implements OnInit {
  public experiencia: Experiencia[];
  public editExperiencia: Experiencia;
  public deleteExperiencia: Experiencia;
  roles: string[];
  isAdmin: boolean = false;
  

  constructor(private experiencialaboralService: ExperiencialaboralService,
    private tokenService: TokenService
    ) { }

  ngOnInit() {
    this.getExperiencias();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( role => {
      if(role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })

  }

  public getExperiencias(): void {
    this.experiencialaboralService.getExperiencias().subscribe(
      (response:Experiencia[]) => {
        this.experiencia = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddExperiencia(addForm: NgForm):void {
    document.getElementById('add-experiencia-modal')?.click();
    this.experiencialaboralService.addExperiencia(addForm.value).subscribe(
      (response: Experiencia) => {
        console.log(response);
        this.getExperiencias();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
    
  }

  public onUpdateExperiencia(experiencia: Experiencia):void {
      this.experiencialaboralService.updateExperiencia(experiencia).subscribe(
      (response: Experiencia) => {
        console.log(response);
        this.getExperiencias();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    
  }

  public onDeleteExperiencia(id: number):void {
    this.experiencialaboralService.deleteExperiencia(id).subscribe(
    (response: void) => {
      console.log(response);
      this.getExperiencias();
      
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
  )
  
}

  public onOpenModal(experiencia: Experiencia, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addExperienciaModal');
    }
    if (mode === 'edit') {
      this.editExperiencia = experiencia;
      button.setAttribute('data-target', '#updateExperienciaModal');
    }
    if (mode === 'delete') {
      this.deleteExperiencia = experiencia;
      button.setAttribute('data-target', '#deleteExperienciaModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
