import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.css']
})
export class HowComponent implements OnInit {

  answer = "wrong";
  option="none";

  selected='bloodyStone';


  items: string[] = ['The victim was hit with a wine glass that was found near the body.', 'The victim was hit by a stone that was thrown through the window.', 'The victim was hit with a baseball bat that was found in the hallway.'];



  constructor() {

   }

  ngOnInit(): void {
  }

  
  checkAnswer(item: string) {
    if(item == "The victim was hit by a stone that was thrown through the window.") {
      this.answer = "right";
    } else {
      confirm("Oh, no! This was not the right answer! Try again.");
    }
  }
  
}
