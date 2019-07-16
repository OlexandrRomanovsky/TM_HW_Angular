import { Component, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GitHubService } from "../../services/git-hub.service";
import { foundUser } from "../models/foundUser";

@Component({
  selector: "app-third-page",
  templateUrl: "./third-page.component.html",
  styleUrls: ["./third-page.component.scss"]
})
export class ThirdPageComponent implements OnInit {
  user: foundUser;
  userLogin: string = this.router.snapshot.params.username;
  repositories;
  repLength: string = " 30+";

  constructor(
    private router: ActivatedRoute,
    private gitHubService: GitHubService
  ) {}

  ngOnInit() {
    this.gitHubService.getUser(this.userLogin).subscribe(
      res => {
        this.user = res;
      },
      err => alert(err)
    );
    this.gitHubService.getRepos(this.userLogin).subscribe(
      res => {
        this.repositories = res;
      },
      err => alert(err)
    );
  }
}
