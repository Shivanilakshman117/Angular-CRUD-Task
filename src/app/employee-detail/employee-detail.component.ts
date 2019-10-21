import { Component, OnInit, Input } from '@angular/core';
import { iEmployees } from '../data/employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService }  from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

employee: iEmployees;  
  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getEmployee();
  }
  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.empService.getEmployee(id)
      .subscribe(emp => this.employee = emp);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.empService.updateEmployee(this.employee)
      .subscribe(() => this.goBack());
  }
}
