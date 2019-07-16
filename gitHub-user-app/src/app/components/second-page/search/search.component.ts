import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  @Input() inputText: string;
  @Output() usersData: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onSearchClick() {
    this.usersData.emit(this.inputText);
  }
}