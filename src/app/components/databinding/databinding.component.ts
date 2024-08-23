import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  myName:string="SureshManiKandan";
  myinputType:string="Checkbox";
  mybreakfast:string="Dosa";
  greeting(){
    window.alert("How can i help U");
  }

}
