import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() search = new EventEmitter();
  @Output() field = new EventEmitter();

  value: string = 'name';


  getData(event) {
    return this.search.emit(event);
  }

  getField() {
    return this.field.emit(this.value);
  }

}
