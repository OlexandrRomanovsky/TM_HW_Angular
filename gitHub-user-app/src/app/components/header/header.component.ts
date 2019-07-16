import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  TMlogo: string = "https://jsfest.com.ua/assets/img/techmagic.png";

  constructor() {}

  ngOnInit() {}
}
