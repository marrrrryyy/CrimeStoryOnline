import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suspects',
  templateUrl: './suspects.component.html',
  styleUrls: ['./suspects.component.css']
})
export class SuspectsComponent implements OnInit {

  clicked = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  actionMethod(event: any) {
    event.target.disabled = true;
}

}
