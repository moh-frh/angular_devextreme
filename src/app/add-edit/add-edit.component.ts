import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { Observable } from 'rxjs';
import { Employee } from '../app.service';
import { EmployeeService } from '../modules/shared/employee.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  employee: any = {};
  loadingVisible = false;

  @ViewChild('userForm')
  userForm!: DxFormComponent;

  
  constructor(private employeeService: EmployeeService, private location: Location) { }

  ngOnInit(): void {}

  onSubmit() {
    if (this.userForm.instance.validate().isValid) {
      this.addUser();
    } else {
      notify('form in-valide', 'error', 2000);
    }
  }

  addUser(){
    this.employeeService.createEmployee(this.employee).then(
      (res: any) => {
        console.log(res);
        this.loadingVisible = false;
        notify('User added successfully', 'success', 1500);
        // this.location.back();
        
      },
      async (error: any) => {
        this.loadingVisible = false;
        console.log(error);
        // this.message.AlertConfirm('Echec', 'un erreur s\'est produit')
      }
    );
  }


}
