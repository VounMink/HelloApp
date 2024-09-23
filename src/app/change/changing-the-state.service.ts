import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangingTheStateService {

  public updateComponentStaff = new BehaviorSubject('false');
  public updateComponentTechnic = new BehaviorSubject('false');
  public updateComponentTypeOfEquipment = new BehaviorSubject('false');
  public updateComponentEmployeeEquipment = new BehaviorSubject('false');

<<<<<<< HEAD
  public dataAboutTheRemovalOfAnEmployee = new BehaviorSubject('');
  public dataOnTheRemovalOfEquipment = new BehaviorSubject('');
  public dataOnTheRemovalOfTheTypeOfEquipment = new BehaviorSubject('');
  public dataOnTheRemovalOfTheEmployeeTechnicianBundle = new BehaviorSubject({});

  public employeeEditingData = new BehaviorSubject(0);
  public informationAboutEditingEquipment = new BehaviorSubject(0);
  public informationAboutEditingTheTypeOfEquipment = new BehaviorSubject(0);
  public dataOnEditingTheEmployeeTechnicianBundle = new BehaviorSubject(0);

=======
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
  constructor() { }
}
