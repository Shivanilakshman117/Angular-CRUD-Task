import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { iEmployees } from './data/employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees= [
      { id: 11, name: 'Akshay' },
      { id: 12, name: 'Aditya' },
      { id: 13, name: 'Neela' },
      { id: 14, name: 'Srinidhi' },
      { id: 15, name: 'Srikanth' },
      { id: 16, name: 'Kumar' },
      { id: 17, name: 'Harish' },
      { id: 18, name: 'Harith' },
      { id: 19, name: 'Stephen' },
      { id: 20, name: 'Srivatsan' }
    ];
    return {employees};
  }

  genId(employees: iEmployees[]): number {
    return employees.length > 0 ? Math.max(...employees.map(emp => emp.id)) + 1 : 11;
  }
}