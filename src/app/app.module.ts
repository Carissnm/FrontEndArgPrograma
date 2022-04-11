import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ExperiencialaboralComponent } from './experiencialaboral/experiencialaboral.component';
import { PersonaComponent } from './persona/persona.component';
import { EstudiosComponent } from './estudios/estudios.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { MenuComponent } from './security/menu/menu.component';
import { RegistroComponent } from './security/auth/registro.component';
import { IndexComponent } from './security/index/index.component';
import { LoginComponent } from './security/auth/login.component';
import { InterceptProvider } from './security/interceptors/portfolio-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';








@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ProyectosComponent,
    ExperiencialaboralComponent,
    PersonaComponent,
    EstudiosComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule,
  ],
  
  providers: [
    InterceptProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
