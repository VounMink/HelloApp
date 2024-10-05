import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

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

  changingEmployeeData(arr: any) {
    console.log(1);
    this.staff = arr;
  }
  changingTechnologyData(arr: any) {
    this.technic = arr;
  }
  changingDataOnTypesOfEquipment(arr: any) {
    this.type_of_equipment = arr;
  }
  changingEmployeeEquipmentData(arr: any) {
    this.employee_equipment = arr;
  }
}
