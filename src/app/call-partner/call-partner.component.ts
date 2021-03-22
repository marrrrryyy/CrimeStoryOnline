import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-call-partner',
  templateUrl: './call-partner.component.html',
  styleUrls: ['./call-partner.component.css']
})
export class CallPartnerComponent implements OnInit {
  answer = "wrong";
  option="none";

  selected='bloodyStone';



  constructor() { 
  }

  ngOnInit(): void {
  }
  
  // onKeyUp(value: any) {
  //   console.log(this.option);
  //   console.log(value);
  // }

  // log(x: any) {
  //   console.log(x);
  // }

  checkAnswer(selectedAnswer: any) {
    if(selectedAnswer == "baseball") {
      this.answer = "right";
    } else {
      confirm("Oh, no! This was not the right answer! Try again.");
    }
  }
  

}
