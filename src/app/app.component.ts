import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [''],
      color: ['#ff0000'],
      password: [''],
      age: [100],
      date: [new Date()],
      subscribe: [true],
      memory: [32],
      distance: [50],
      region: ['south-america']
    });
  }

  submit() {
    console.log(this.form.value);
  }
}
