import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { GitService } from './git.service';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HeadingComponent } from './heading/heading.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeadingComponent,
    PipesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
