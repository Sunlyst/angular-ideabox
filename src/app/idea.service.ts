import { Injectable } from "@angular/core";

@Injectable()
export class IdeaService {
  private ideas: Array<Idea>;

  constructor() {
    this.ideas = [];
  }

  getIdeas() {
    return this.ideas;
  }

  addIdea(username: string, description: string) {
    const idea: Idea = { username: username, description: description };
    this.ideas.push(idea);
  }
}

export class Idea {
  username: string;
  description: string;
}
