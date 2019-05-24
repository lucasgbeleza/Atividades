import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'


import { Livro311Component } from './livro311/livro311.component';
import { Livro312Component } from './livro312/livro312.component';
import { Livro313Component } from './livro313/livro313.component';
import { Livro314Component } from './livro314/livro314.component';
import { Livro321Component } from './livro321/livro321.component';
import { Livro331Component } from './livro331/livro331.component';
import { TesteComJsonComponent } from './teste-com-json/teste-com-json.component';
import { Livro341Component } from './livro341/livro341.component';
import { Livro342Component } from './livro342/livro342.component';

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
    Livro342Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
