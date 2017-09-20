import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyDatePickerModule } from 'mydatepicker';
import {DetailsService} from './detailsService';

import { AppComponent } from './app.component';
import { NumberFormatPipe } from './number-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumberFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MyDatePickerModule      
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
