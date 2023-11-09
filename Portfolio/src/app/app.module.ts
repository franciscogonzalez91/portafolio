import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppMainComponent } from './app-main/app-main.component';
import { IndexComponent } from './app-main/index/index.component';
import { AboutComponent } from './app-main/about/about.component';
import { SkillsComponent } from './app-main/skills/skills.component';
import { ExperienceComponent } from './app-main/experience/experience.component';
import { JobCardComponent } from './app-main/experience/job-card/job-card.component';



@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppMainComponent,
    IndexComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    JobCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
