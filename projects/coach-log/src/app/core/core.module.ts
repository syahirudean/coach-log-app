import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

  ],
  exports: [MainLayoutComponent]
})
export class CoreModule {}
