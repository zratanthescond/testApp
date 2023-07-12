import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HomeButtonComponent } from './home-button/home-button.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { MapSectionComponent } from './map-section/map-section.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({

  declarations: [
    HomeButtonComponent,
    HomeHeaderComponent,
    HomeSectionComponent,
    MapSectionComponent,
    ContactFormComponent
  ],
  exports: [HomeButtonComponent,
    HomeHeaderComponent,
    HomeSectionComponent,
    MapSectionComponent, ContactFormComponent],

})
export class SharedModule { }
