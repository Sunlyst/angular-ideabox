import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from '../idea.service';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.css']
})
export class IdeaListComponent implements OnInit {

  private ideas : Idea[];

  constructor(
     private ideaService: IdeaService
  ){
  }


  ngOnInit(){
    this.ideas = this.ideaService.getIdeas();
    //this.ideas = IdeaService.instance.getIdeas();
  }

  Like(idea: Idea)
  {
    idea.rating++;
  }
  Dislike(idea: Idea)
  {
    idea.rating--;
  }
}