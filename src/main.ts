import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  template: `
    <h1>Advanced Form Types</h1>

    <form [formGroup]="form" (ngSubmit)="submit()">
      <!-- text input in angular forms -->
      <label for="name">Name (type="text")</label>
      <input formControlName="name" id="name" />

      <!-- color input in angular forms -->
      <label for="color">Favorite Color (type="color")</label>
      <input formControlName="color" id="color" type="color" />

      <!-- password input in angular forms -->
      <label for="password">Password (type="password")</label>
      <input formControlName="password" id="password" type="password" />

      <!-- number input in angular forms -->
      <label for="age">Age (type="number")</label>
      <input formControlName="age" id="age" type="number" />

      <!-- Distance input in angular forms -->
      <label for="date">Date (type="date")</label>
      <input formControlName="date" id="date" type="date" />

      <!-- checkbox input in angular forms -->
      <label class="checkbox-wrapper">
        <input formControlName="subscribe" type="checkbox" />
        Subscribe (type="checkbox")
      </label>

      <!-- select input in angular forms -->
      <label for="memory">Memory (select)</label>
      <select formControlName="memory" id="memory" >
        <option value="16">16 Gigabytes</option>
        <option value="32">32 Gigabytes</option>
        <option value="64">64 Gigabytes</option>
        <option value="128">128 Gigabytes</option>
      </select>

      <!-- range input in angular forms -->
      <label for="distance">Distance (type="range")</label>
      <input formControlName="distance" id="distance" type="range" min="0" max="100" />

      <!-- radio input in angular forms -->
      <span class="label">Region (type="radio")</span>
      <label>
        <input formControlName="region" type="radio" name="region" value="north-america" />
        North America
      </label>
      <label>
        <input formControlName="region" type="radio" name="region" value="south-america" />
        South America
      </label>
      <label>
        <input formControlName="region" type="radio" name="region" value="europe" />
        Europe
      </label>

      <br />
      <button>Submit</button>
    </form>
  `,
})
export class App {
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

bootstrapApplication(App);
