import { NgIf, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgforComponent } from "./ngfor/ngfor.component";
import {NgifComponent} from "./ngif/ngif.component";
import { NgswitchComponent } from './ngswitch/ngswitch.component';

@Component({ // here @Component is a directive
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgforComponent,NgifComponent,NgswitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directive';
  //directive is a class that adds additional behaviour to the elements in your application
  //  directive is a feature  that helps ypu to provide more power to DOM elements
  // if-else conditoon
  // for loop
  // add style
  // ngif,ngfor,ngstyle,ngswitch,ngclass
  // three types of directives
  // 1 component directive - the most common type of directive , used in component template file
  // 2 structural directive- changes the structure of the dom by adding, removing or manipulating elements
  // 3 attribute directive - modify the appearance or behaviour of an existing element
  show=true;
}
