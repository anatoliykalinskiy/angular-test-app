import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './@Theme/layout/header/header.component';
import { LeftSidebarComponent } from './@Theme/layout/left-sidebar/left-sidebar.component';
import { ContentComponent } from './@Theme/layout/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    ContentComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatIconModule,
        MatDividerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
