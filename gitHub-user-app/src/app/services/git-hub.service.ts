import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

import { Observable } from "rxjs";
import { foundUser } from "../components/models/foundUser";
import { Config } from "protractor/built/config";

@Injectable({
  providedIn: "root"
})
export class GitHubService {
  urlUsers: string = "https://api.github.com/search/users?q=";
  usersPerPage: string = "&per_page=20";
  urlUser: string = "https://api.github.com/users/";
  pageUrl: string = "&page=";

  constructor(private http: HttpClient) {}

  getUsers(name: string, page: number): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      `${this.urlUsers}${name}${this.usersPerPage}${page && '&page=' + page }`,
      { observe: "response" }
    );
  }

  getUser(name): Observable<foundUser> {
    return this.http.get<foundUser>(`${this.urlUser}${name}`);
  }

  getRepos(name): Observable<any> {
    return this.http.get<any>(`${this.urlUser}${name}/repos`);
  }
}
