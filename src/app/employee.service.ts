import { Injectable } from '@angular/core';
import { iEmployees } from './data/employee';
import { EMPLOYEES } from './data/sampleEmployees';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'api/employees';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getEmployee(id:number): Observable<iEmployees> {
    const url = `${this.employeesUrl}/${id}`;
  return this.http.get<iEmployees>(url).pipe(
    tap(_ => this.log(`fetched employee id=${id}`)),
    catchError(this.handleError<iEmployees>(`getEmployee id=${id}`))
  );
  }
  getEmployees(): Observable<iEmployees[]> {
   
    return this.http.get<iEmployees[]>(this.employeesUrl)
    .pipe(
      tap(_ => this.log('fetched employees')),
      catchError(this.handleError<iEmployees[]>('getEmployees', []))
    );
  }
  private log(message:string){
    this.messageService.add(`EmployeeService:${message}`);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console instead
  
      this.log(`${operation} failed: ${error.message}`);
 
      return of(result as T);
    };
  }
  /** PUT: update the hero on the server */
updateEmployee (employee: iEmployees): Observable<any> {
  return this.http.put(this.employeesUrl, employee, this.httpOptions).pipe(
    tap(_ => this.log(`updated employee id=${employee.id}`)),
    catchError(this.handleError<any>('updateEmployee'))
  );
}

/** POST: add a new hero to the server */
addEmployee (employee: iEmployees): Observable<iEmployees> {
  return this.http.post<iEmployees>(this.employeesUrl, employee, this.httpOptions).pipe(
    tap((newEmployee: iEmployees) => this.log(`added employee w/ id=${newEmployee.id}`)),
    catchError(this.handleError<iEmployees>('addEmployee'))
  );
}
/** DELETE: delete the hero from the server */
deleteEmployee (employee: iEmployees | number): Observable<iEmployees> {
  const id = typeof employee === 'number' ? employee : employee.id;
  const url = `${this.employeesUrl}/${id}`;

  return this.http.delete<iEmployees>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted employee id=${id}`)),
    catchError(this.handleError<iEmployees>('deleteEmployee'))
  );
}

}
