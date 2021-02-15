import { getLocaleDayNames, getLocaleId } from '@angular/common';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { Component, OnInit, Output, EventEmitter, Input, ViewChildren, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StartService } from './start.service';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  
  
  value: any
  namePlayer: string = ""

  listFilter='';


  constructor() {
  }

  ngOnInit() {}

  ClearText(){
    this.listFilter='';
  }

  // onEnter(value: string) { 
  //   this.namePlayer = value;
  // console.log('value: '+value, 'this.user.name:' +this.namePlayer)
  // }



}
