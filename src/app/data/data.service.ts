import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public staff: any = new BehaviorSubject([]);
  public technic: any = new BehaviorSubject([]);
  public type_of_equipment: any = new BehaviorSubject([]);
  public employee_equipment: any = new BehaviorSubject([]);
}
