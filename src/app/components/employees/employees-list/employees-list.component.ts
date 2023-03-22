import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: '52028086',
      name: 'Asad khan',
      email: 'asadkhanwork@gmmail.com',
      phone: 887102516,
      salary: 90000,
      department: 'Human Resource'
    },
    {
      id: '52028082',
      name: 'Asadss khan',
      email: 'asadkshanwork@gmmail.com',
      phone: 8871025216,
      salary: 900010,
      department: 'Software Resource'
    },
    {
      id: '520223086',
      name: 'Asad khanna',
      email: 'asadkhannawork@gmmail.com',
      phone: 88710211516,
      salary: 90006760,
      department: 'Engineer'
    },
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}
