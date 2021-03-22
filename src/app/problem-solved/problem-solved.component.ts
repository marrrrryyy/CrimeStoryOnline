import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-solved',
  templateUrl: './problem-solved.component.html',
  styleUrls: ['./problem-solved.component.css']
})
export class ProblemSolvedComponent implements OnInit {

  answer = "wrong";
  option="none";

  selected= "";

  items: string[] = [
    'The Broken Wine Glass', 
    'The Bloody Stone', 
    'The Broken Window Fragments'
    ];



  constructor() {

   }

  ngOnInit(): void {
  }

  
  checkAnswer(item: string) {
    if(item == "The Bloody Stone") {
      this.answer = "right";
    } else {
      confirm("Oh, no! This was not the right answer! Try again.");
    }
  }

}
