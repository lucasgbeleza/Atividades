import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material';

import { Livro311Component } from './livro311/livro311.component';
import { Livro312Component } from './livro312/livro312.component';
import { Livro313Component } from './livro313/livro313.component';
import { Livro314Component } from './livro314/livro314.component';
import { Livro321Component } from './livro321/livro321.component';
import { Livro331Component } from './livro331/livro331.component';
import { TesteComJsonComponent } from './teste-com-json/teste-com-json.component';
import { Livro341Component } from './livro341/livro341.component';
import { Livro342Component } from './livro342/livro342.component';
import { Livro351Component } from './livro351/livro351.component';
import { Livro361Component } from './livro361/livro361.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    Livro311Component,
    Livro312Component,
    Livro313Component,
    Livro314Component,
    Livro321Component,
    Livro331Component,
    TesteComJsonComponent,
    Livro341Component,
    Livro342Component,
    Livro351Component,
    Livro361Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
