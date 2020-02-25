import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { IdeaService, Idea } from '../idea.service';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent{

  ideaForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private ideaService: IdeaService
    ){

    this.ideaForm = this.fb.group({
      username: '',
      description: ''
    })
  }

  newIdea(){
    if(this.ideaForm.value.username != '' && this.ideaForm.value.description != '')
    {  
      this.ideaService.addIdea(this.ideaForm.value.username, this.ideaForm.value.description)
    }
  }
}