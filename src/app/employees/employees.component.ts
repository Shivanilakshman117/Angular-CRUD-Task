import { Component, OnInit } from '@angular/core';
import { iEmployees } from '../data/employee';
//import {EMPLOYEES} from '../data/sampleEmployees';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeesList : iEmployees[];
 
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
  this.empService.getEmployees().subscribe(employees=>this.employeesList=employees);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.empService.addEmployee({ name } as iEmployees)
      .subscribe(hero => {
        this.employeesList.push(hero);
      });
  }
  delete(employee: iEmployees): void {
    this.employeesList = this.employeesList.filter(e => e !== employee);
    this.empService.deleteEmployee(employee).subscribe();
  }

}
