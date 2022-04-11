import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skills } from './skills';
import { SkillsService } from './skills.service';
import { TokenService } from '../security/Service/token.service';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: Skills[];
  public editSkills: Skills;
  public deleteSkills: Skills;
  roles: string[];
  isAdmin: boolean = false;
  
  

  constructor(private skillsService: SkillsService,
    private tokenService: TokenService
    ) { }

  ngOnInit(){
    this.getSkills();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( role => {
      if(role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
  }

  public getSkills(): void {
    this.skillsService.getSkills().subscribe(
      (response: Skills[]) => {
        this.skills = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  public onAddSkill(addForm: NgForm):void {
    document.getElementById('add-skills-modal')?.click();
    this.skillsService.addSkills(addForm.value).subscribe(
      (response: Skills) => {
        console.log(response);
        this.getSkills();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
    
  }

  public onUpdateSkill(skill: Skills):void {
      this.skillsService.updateSkills(skill).subscribe(
      (response: Skills) => {
        console.log(response);
        this.getSkills();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    
  }

  public onDeleteSkill(id: number):void {
    this.skillsService.deleteSkills(id).subscribe(
    (response: void) => {
      console.log(response);
      this.getSkills();
      
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
  
}

  public onOpenModal(skill: Skills, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSkillsModal');
    }
    if (mode === 'edit') {
      this.editSkills = skill;
      button.setAttribute('data-target', '#updateSkillsModal');
    }
    if (mode === 'delete') {
      this.deleteSkills = skill;
      button.setAttribute('data-target', '#deleteSkillsModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
