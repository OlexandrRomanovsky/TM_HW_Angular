import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-render-photo",
  templateUrl: "./render-photo.component.html",
  styleUrls: ["./render-photo.component.scss"]
})
export class RenderPhotoComponent implements OnInit {
  photoUrl: string = "https://image.flaticon.com/icons/svg/25/25231.svg";

  constructor() {}

  ngOnInit() {}
}
