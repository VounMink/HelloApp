import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private staff: any = [];
  private technic: any = [];
  private type_of_equipment: any = [];
  private employee_equipment: any = [];

  gettingEmployeeData() {
      return this.staff;
  }
  gettingInformationAboutTheEquipment() {
    return this.technic;
  }
  obtainingDataOnTheTypesOfEquipment() {
      return this.type_of_equipment;
  }
  gettingInformationAboutTheEquipmentOfEmployees() {
      return this.employee_equipment;
  }

  changingEmployeeData() {
    this.http.get('http://localhost:3000/staff', {observe: 'response'}).subscribe(res => {
        this.staff = res.body;
    });
  }
  changingTechnologyData() {
    this.http.get('http://localhost:3000/technic', {observe: 'response'}).subscribe(res => {
        this.technic = res.body;
    });
  }
  changingDataOnTypesOfEquipment() {
    this.http.get('http://localhost:3000/technic', {observe: 'response'}).subscribe(res => {
        this.type_of_equipment = res.body;
    });
  }
  changingEmployeeEquipmentData() {
    this.http.get('http://localhost:3000/technic', {observe: 'response'}).subscribe(res => {
        this.employee_equipment = res.body;
    });
  }
}
