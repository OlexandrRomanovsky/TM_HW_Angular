import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FirstPageComponent } from "./components/first-page/first-page.component";
import { SecondPageComponent } from "./components/second-page/second-page.component";
import { ThirdPageComponent } from './components/third-page/third-page.component';

const routes: Routes = [
  {
    path: "",
    component: SecondPageComponent
  },
  {
    path: "home",
    component: FirstPageComponent
  },
  {
    path: "search",
    component: SecondPageComponent
  },
  {
    path: "search/:username",
    component: ThirdPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
