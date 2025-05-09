import { NgFor, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  imports: [NgFor,NgSwitch],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
students=['Anil','sam','peter','vinay','Bruce'];
studentsData=[ // this is array of objects
  {
    name:'Anil',
    age:'29',
    email:'anil@gmail.com'
  },{
    name:'Sam',
    age:'23',
    email:'A@gmail.com'

  },
  {
    name:'Peter',
    age:'24',
    email:'B@gmail.com'
  },
  {
    name:'Ram',
    age:'12',
    email:'C@gmail.com'
  }
]

}
