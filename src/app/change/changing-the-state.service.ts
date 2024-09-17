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

  constructor() { }
}
