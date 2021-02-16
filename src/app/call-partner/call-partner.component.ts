import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-call-partner',
  templateUrl: './call-partner.component.html',
  styleUrls: ['./call-partner.component.css']
})
export class CallPartnerComponent implements OnInit {
  @ViewChild("demo") demo!: ElementRef;
  @ViewChild("baseball") baseball!: ElementRef;


  constructor() { 
  }

  ngOnInit(): void {
  }
  
  submitAnswer() {
    if (this.baseball.nativeElement.innerHTML === "baseball") {
      console.log("true");
    }
    


  }

  

}
