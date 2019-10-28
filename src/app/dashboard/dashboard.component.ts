import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { iEmployees } from '../data/employee';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  employees: iEmployees[] = [];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.empService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }
}