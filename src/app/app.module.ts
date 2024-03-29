import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';
import { RecentProjectsComponent } from './components/recent-projects/recent-projects.component';
import { MoreAboutComponent } from './components/more-about/more-about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './components/success/success.component';
import { FailureComponent } from './components/failure/failure.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    WorksComponent,
    ContactComponent,
    NotFoundComponent,
    WorkDetailComponent,
    RecentProjectsComponent,
    MoreAboutComponent,
    SuccessComponent,
    FailureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
