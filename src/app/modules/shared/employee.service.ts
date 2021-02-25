import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from 'src/app/app.service';
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  mockUrl = 'http://localhost:3000/employees/'

  currentEmployee: Employee | undefined;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Promise<any>{
    console.log("%c all emp ", "color:green")
    return this.http.get<Employee[]>(this.mockUrl, headerOption).toPromise();
  }

  createEmployee(employee: Employee): Promise<any>{
    console.log("%c create  emp ", "color:green")
    return this.http.post(this.mockUrl, employee, headerOption).toPromise()
  }

  
  deleteEmployee(id: any): Promise<any>{
    console.log(id)
    return this.http.delete(this.mockUrl  + id, headerOption).toPromise()
  }

  updateUser(id: any, data: Employee): Promise<any>{
    console.log("%c update  emp ", "color:green")
    return this.http.put(this.mockUrl + id, data).toPromise()
  }
  

}
