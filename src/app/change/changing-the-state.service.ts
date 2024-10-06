import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangingTheStateService {

  public updateComponentStaff = new BehaviorSubject([false, []]);
  public updateComponentTechnic = new BehaviorSubject([false, []]);
  public updateComponentTypeOfEquipment = new BehaviorSubject([false, []]);
  public updateComponentEmployeeEquipment = new BehaviorSubject([false, []]);

  public deleteEmployee = new BehaviorSubject('');
  public deleteEquipment = new BehaviorSubject('');
  public deleteTypeOfEquipment = new BehaviorSubject('');
  public deleteBundle = new BehaviorSubject({});

  public editEmployee = new BehaviorSubject(NaN);
  public editEquipment = new BehaviorSubject(0);
  public editTypeOfEquipment = new BehaviorSubject(0);
  public editingBundle = new BehaviorSubject(0);

  constructor() {}
}
