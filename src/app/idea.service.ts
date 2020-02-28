import { Injectable } from "@angular/core";

@Injectable()
export class IdeaService {
  private ideas: Array<Idea>;
  
  //public static instance: IdeaService;

  constructor() {
    this.ideas = [];
  }

  getIdeas() {
    return this.ideas;
  }

  addIdea(username: string, description: string) {
    const idea: Idea = { username: username, description: description, rating: 0};
    this.ideas.push(idea);
  }
}

export class Idea {
  username: string;
  description: string;
  rating: number;
}