import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  hasValue: boolean = false;
  isCondition: boolean = true;
  frontEnd:string[]=["Html","Css","Bootstrap","JavaScript","React","Angular"];

  selectedCourse:string="Bootstrap" 
  employee:any[]=[
    {id:101,name:"Suresh",post:"TL",company:"NSW"},
    {id:102,name:"Sathya",post:"DH",company:"Apple"},
    {id:103,name:"Deva",post:"Manager",company:"Samsung"},
    {id:104,name:"Kumar",post:"TL",company:"Delta"},
  ]

  clicklist(course:string){
    window.alert(`You selected ${course}`)
  }
}
