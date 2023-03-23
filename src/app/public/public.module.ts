import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PulicMenuComponent } from './pulic-menu/pulic-menu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PulicMenuComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    PulicMenuComponent,
  ]
})
export class PublicModule { }
