import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() next: EventEmitter<any> = new EventEmitter;
  @Output() prev: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  
  onNextClick() {
    this.next.emit();
  }

  onPrevClick() {
    this.prev.emit();
  }
}
