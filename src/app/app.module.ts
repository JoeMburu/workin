import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { HeaderComponent } from './header/header.component';

import { JobsService } from './services/jobs.service';
import { HomeComponent } from './home/home.component';
import { VideoClipComponent } from './video-clip/video-clip.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    HeaderComponent,
    HomeComponent,
    VideoClipComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
