import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  ideaForm : FormGroup

  constructor(private fb: FormBuilder){

    this.ideaForm = this.fb.group({
      username: '',
      description: ''
    })
  }

  newIdea(){
    console.log(this.ideaForm.value);
    
  }
}