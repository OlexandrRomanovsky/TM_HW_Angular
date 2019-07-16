import { PaginationComponent } from './components/second-page/pagination/pagination.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderPhotoComponent } from './components/first-page/render-photo/render-photo.component';
import { TitleComponent } from './components/first-page/title/title.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { LoremTxtComponent } from './components/first-page/lorem-txt/lorem-txt.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { SearchComponent } from './components/second-page/search/search.component';
import { UserComponent } from './components/second-page/user/user.component';
import { ThirdPageComponent } from './components/third-page/third-page.component';
import { ReposComponent } from './components/third-page/repos/repos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    RenderPhotoComponent,
    TitleComponent,
    FirstPageComponent,
    LoremTxtComponent,
    HeaderComponent,
    FooterComponent,
    SecondPageComponent,
    SearchComponent,
    UserComponent,
    ThirdPageComponent,
    ReposComponent,
    PaginationComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
