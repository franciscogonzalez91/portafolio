import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './app-main/index/index.component';
import { AboutComponent } from './app-main/about/about.component';
import { SkillsComponent } from './app-main/skills/skills.component';
import { ExperienceComponent } from './app-main/experience/experience.component';

const routes: Routes = [
  { path:'', component: IndexComponent },
  { path:'about', component: AboutComponent },
  { path:'skills', component: SkillsComponent },
  { path:'experience', component: ExperienceComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
