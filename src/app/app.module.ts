import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { IdeaService } from './idea.service';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaFormComponent } from './idea-form/idea-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, IdeaListComponent, IdeaFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [IdeaService]
})
export class AppModule { }
