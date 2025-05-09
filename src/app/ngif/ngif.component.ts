import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  imports: [NgIf],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {
isshow=true;
login=false;
isvalue=true;
istrue=false;

}
