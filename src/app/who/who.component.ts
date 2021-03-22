import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})
export class WhoComponent implements OnInit {
  answer = "wrong";
  option="none";

  selected='bloodyStone';


  items: string[] = [
    'It was the neighbour. He was so angry at the victim because she poisoned his cats.', 
    'It was her husband. Their marriage didn’t go well and he found out about her affairs.'
    ];



  constructor() {

   }

  ngOnInit(): void {
  }

  
  checkAnswer(item: string) {
    if(item == "It was the neighbour. He was so angry at the victim because she poisoned his cats.") {
      this.answer = "right";
    } else {
      confirm("Oh, no! This was not the right answer! Try again.");
    }
  }
  

}
