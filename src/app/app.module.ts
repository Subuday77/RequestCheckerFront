import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectPageComponent } from './components/select-page/select-page.component';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BoApiRequestPageComponent } from './components/bo-api-request-page/bo-api-request-page.component';
import { ResultPageComponent } from './components/result-page/result-page.component';





@NgModule({
  declarations: [
    AppComponent,
    ResultPageComponent,
    SelectPageComponent,
    BoApiRequestPageComponent
  ],
  imports: [
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,  
    CommonModule,  
    AppRoutingModule,
    TextareaAutosizeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
