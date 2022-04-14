import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/auth/login.component';
import { RegistroComponent } from './security/auth/registro.component';
import { IndexComponent } from './security/index/index.component';
import { PortfolioGuardService as guard } from './security/guards/portfolio-guard.service';
import { EstudiosComponent } from './estudios/estudios.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencialaboralComponent } from './experiencialaboral/experiencialaboral.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PersonaComponent } from './persona/persona.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'estudios', component: EstudiosComponent, canActivate:[guard], data: {expectedRole: ['admin', 'user']}},
  {path: 'skills', component: SkillsComponent, canActivate:[guard], data: {expectedRole: ['admin', 'user']}},
  {path: 'experiencialaboral', component: ExperiencialaboralComponent, canActivate:[guard], data: {expectedRole: ['admin', 'user']}},
  {path: 'proyectos', component: ProyectosComponent, canActivate:[guard], data: {expectedRole: ['admin', 'user']}},
  {path: 'user', component: PersonaComponent, canActivate:[guard], data: {expectedRole: ['admin', 'user']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
