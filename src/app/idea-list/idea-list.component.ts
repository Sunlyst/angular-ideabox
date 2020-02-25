import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { IdeaService, Idea } from '../idea.service';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.css']
})
export class IdeaListComponent implements OnInit {

  private ideas : Idea[];
  ideaForm : FormGroup;

  constructor(
    private ideaService: IdeaService,
    private fb: FormBuilder,
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


  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
  }
}