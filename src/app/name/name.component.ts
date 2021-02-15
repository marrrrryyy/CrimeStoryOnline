
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { StartComponent } from '../start/start.component';
import { StartService } from '../start/start.service';

@Component({
  selector: 'name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  name: string = "default";

  

  constructor() { 

  }



  ngOnInit() {
  }



}
