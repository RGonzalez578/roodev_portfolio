import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'works', component: WorksComponent},
  {path: 'work', component: WorkDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }