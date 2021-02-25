import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DataGridComponent } from './data-grid/data-grid.component';

const routes: Routes = [
  { path: '', component: DataGridComponent },
  { path: 'add-edit', component: AddEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
