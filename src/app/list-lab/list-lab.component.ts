import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-lab',
  templateUrl: './list-lab.component.html',
  styleUrls: ['./list-lab.component.css']
})
export class ListLabComponent implements OnInit {

  viewMode = "hidden";

  constructor() { }

  ngOnInit(): void {
  }

  loadList() {
    this.viewMode = "visible";
  }

}
