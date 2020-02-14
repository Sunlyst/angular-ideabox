import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'

import { IdeaService, Idea } from './idea.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
  ideaForm : FormGroup;
  ideas: Idea[];

  constructor(
    private fb: FormBuilder,
    private ideaService: IdeaService
    ){

    this.ideaForm = this.fb.group({
      username: '',
      description: ''
    })
  }

  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
  }

  newIdea(){
    if(this.ideaForm.value.username != '' && this.ideaForm.value.description != '')
    {  
      this.ideaService.addIdea(this.ideaForm.value.username, this.ideaForm.value.description)
    }
  }
}