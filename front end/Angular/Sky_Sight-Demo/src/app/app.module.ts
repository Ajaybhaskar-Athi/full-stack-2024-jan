import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SkysightComponent } from './modules/skysight/page/skysight/skysight.component';
import { SkysightCardComponent } from './modules/skysight/components/skysight-card/skysight-card.component';
import { HeadComponent } from './modules/skysight/components/head/head.component';
import { DumCardComponent } from './modules/skysight/components/dum-card/dum-card.component';
import { SigninComponent } from './modules/skysight/components/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './modules/skysight/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ComComponent } from './modules/skysight/components/com/com.component';


@NgModule({
  declarations: [
    AppComponent,
    SkysightComponent, SkysightCardComponent, HeadComponent, DumCardComponent, SigninComponent, FooterComponent, ComComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,ReactiveFormsModule,RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
