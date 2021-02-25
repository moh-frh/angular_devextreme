import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import notify from 'devextreme/ui/notify';

import {Employee, AppService, State} from '../app.service'
import { EmployeeService } from '../modules/shared/employee.service';



@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  name: any;
  
  // dataSource: Employee[] = [];

  dataSource: any = {};
  isHidden = true;

  states: State[] | undefined;

  toggleHidden(){
    this.isHidden = ! this.isHidden  
  }

  // dataSource2: any = {};

  ngOnInit(): void {
  // this.getAllEmployee()
  }

  onRowUpdating(e: any) {
    console.log(e);

    const tmp: Employee = { 
                            id: null,
                            FirstName: '',
                            LastName: '',
                            Position: '',
                            BirthDate: '',
                            Prefix:'',
                            HireDate:'',
                            Notes:'',
                            Address: '',
                            // StateID: null 
                          };

    Object.assign(tmp, e.oldData);
    Object.assign(tmp, e.newData); 

    e.newData = tmp;
  }

  constructor(
              private _appService: AppService,
              private employeeService: EmployeeService ){

    // this.dataSource = _appService.getCompanies();
    
    // this.dataSource
    this.dataSource = new CustomStore({
      key: 'id',
      load: employeeService.getAllEmployees.bind(employeeService),
      update: employeeService.updateUser.bind(employeeService),
      insert: employeeService.createEmployee.bind(employeeService),
      remove: employeeService.deleteEmployee.bind(employeeService),
    }); 
  }

  // getAllEmployee() {
  //   this.employeeService.getAllEmployees()
  //     .subscribe(
  //       (data: Employee[]) => {
  //         this.dataSource = data;
  //       });
  // }
 

  private static isChief(position: string) {
    return position && ["CEO", "CMO"].indexOf(position.trim().toUpperCase()) >= 0;
};

rowValidating(e: { newData: { Position: any; }; errorText: string; isValid: boolean; }) {
    const position = e.newData.Position;

    if(DataGridComponent.isChief(position)) {
        e.errorText = "The company can have only one " + position.toUpperCase() + ". Please choose another position.";
        e.isValid = false;
    }
}

editorPreparing(e: { parentType: string; dataField: string; editorOptions: { readOnly: string | boolean; }; value: string; }) {
    if(e.parentType === "dataRow" && e.dataField === "Position") {
        e.editorOptions.readOnly = DataGridComponent.isChief(e.value);
    }
}

// allowDeleting(e: { row: { data: { Position: string; }; }; }) {
//     return !DataGridComponent.isChief(e.row.data.Position);
// }

isCloneIconVisible(e: { row: { isEditing: any; data: { Position: string; }; }; }) {
    return !e.row.isEditing && !DataGridComponent.isChief(e.row.data.Position);
}

cloneIconClick(e: { row: { data: any; rowIndex: number; }; event: { preventDefault: () => void; }; }) {
    // const clonedItem = { ...e.row.data, ID: this._appService.getMaxID() };

    // this.dataSource.splice(e.row.rowIndex, 0, clonedItem);
    // e.event.preventDefault();
    alert("clone icone taping")
}

  

  buttonClick(){
    notify(this.name, "success", 2000);
  }

}
