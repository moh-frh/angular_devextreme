import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DxButtonModule, DxDataGridModule, DxFormModule, DxLoadPanelModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { DataGridComponent } from './data-grid/data-grid.component';

import { HttpClientModule } from '@angular/common/http';
import { AddEditComponent } from './add-edit/add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    AddEditComponent,

  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxDataGridModule,
    DxLoadPanelModule,
    DxFormModule, 

    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
