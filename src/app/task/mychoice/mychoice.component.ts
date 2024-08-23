import { Component } from '@angular/core';

@Component({
  selector: 'app-mychoice',
  standalone: true,
  imports: [],
  templateUrl: './mychoice.component.html',
  styleUrls: ['./mychoice.component.css']  // Fix here: styleUrls instead of styleUrl
})
export class MychoiceComponent {
  myinputType:string ="checkbox";

  greeting(label: string) {
    window.alert(`You selected: ${label}`);
  }
}
