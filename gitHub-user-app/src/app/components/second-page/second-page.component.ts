import { Component, OnInit } from "@angular/core";
import { GitHubService } from "src/app/services/git-hub.service";
import { User } from "../models/user";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-second-page",
  templateUrl: "./second-page.component.html",
  styleUrls: ["./second-page.component.scss"]
})
export class SecondPageComponent implements OnInit {
  inputText: string;
  fetchedUsersData: User;
  numOfUsers: number;
  numPagesForPagination: number[] = [];
  searchName: string;
  isLoading: boolean;
  currentPage = 1;

  constructor(
    private gitHubService: GitHubService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.username) {
        this.searchName = params.username;
        this.getUsersByName(params.username);
      }
    });
  }

  onSearch(username: string) {
    this.router.navigate(["/search"], {
      queryParams: { username },
      queryParamsHandling: "merge"
    });
  }

  getUsersByName(username: string) {
    this.isLoading = true;
    this.gitHubService.getUsers(username, this.currentPage).subscribe(
      res => {
        this.numOfUsers = res.body.total_count;
        this.fetchedUsersData = res.body.items;
      },
      err => alert(err),
      () => (this.isLoading = false)
    );
  }
  
  onPrev() {
    --this.currentPage;
    this.onPaginationChange();
  }

  onNext() {
    ++this.currentPage;
    this.onPaginationChange();
  }

  onPaginationChange() {
    this.router.navigate(["/search"], {
      queryParams: { page: this.currentPage },
      queryParamsHandling: "merge"
    });
  }
}
