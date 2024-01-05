import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Add this import
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { careerComponent } from './career/career.component'; // Adjusted the class name
import { DesignComponent } from './design/design.component';

import { MoreComponent } from './more/more.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CookiesComponent } from './cookies/cookies.component';
import { TermsComponent } from './terms/terms.component';
import { CeilingComponent } from './ceiling/ceiling.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { WallComponent } from './wall/wall.component';
import { MaterialComponent } from './material/material.component';
import { VastuComponent } from './vastu/vastu.component';
import { ElectricComponent } from './electric/electric.component';
import { BuildComponent } from './build/build.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    careerComponent,
    DesignComponent,
    MoreComponent,
    ContactComponent,
    PrivacyComponent,
    CookiesComponent,
    TermsComponent,
    CeilingComponent,
    KitchenComponent,
    BedroomComponent,
    WallComponent,
    MaterialComponent,
    VastuComponent,
    ElectricComponent,
    BuildComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // Add this line
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
