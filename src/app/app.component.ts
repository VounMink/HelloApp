import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SystemInterface } from './system_interface/system_interface.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data/data.service';
import { ChangingTheStateService } from './change/changing-the-state.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SystemInterface, FormsModule, HttpClientModule],
  providers: [DataService],
<<<<<<< HEAD
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  opening_the_modal_menu: string = "none";
  opening_the_modal_menu__staff: string = "none";
  opening_the_modal_menu__technic: string = "none";
  opening_the_modal_menu__type_of_equipment: string = "none";
  opening_the_modal_menu__employee_equipment: string = "none";

  data_employees_full_name: string = "";
  data_employees_office_number: any = "";

  data_name_of_the_equipment: string = "";
  data_name_of_the_selected_type_of_equipment: string = "";

  data_the_name_of_the_introduced_type_of_equipment: string = "";

  id_of_the_selected_employee: string = "";
  the_account_number_of_the_selected_employee: number = 0;
  id_of_the_selected_equipment: string = "";
  the_type_of_equipment_selected: string = "";

  an_array_of_technical_data: any = [];
  array_of_full_names_of_employees: any = [];
  array_of_equipment_names: any = [];

  employee_s_full_name: string = "";
  name_of_the_remote_equipment: string = "";
  remote_type_of_equipment: string = "";
  employee_technician_object: any = {};

  showing_the_employee_removal_window: string = "none";
  showing_the_modal_window_for_removing_equipment: string = "none";
  showing_a_modal_window_for_deleting_a_type_of_technique: string = "none";
  showing_the_modal_window_for_removing_the_technician_employee_bundle: string = "none";

  the_object_of_the_employee_being_edited: any = {};
  the_object_of_the_edited_technique: any = {};
  an_array_of_all_types_of_equipment: Array<string> = [];
  an_object_of_the_type_of_equipment_being_edited: any = {};
  the_object_of_editing_the_employee_technician_bundle: any = {};
  list_of_full_names_of_all_employees: Array<string> = [];
  list_of_names_of_all_equipment: Array<string> =  [];
  name_of_the_employee_s_current_equipment: String = "";

  showing_the_employee_editing_window: string = "none";
  showing_a_modal_window_for_changing_the_technique: string = "none";
  showing_a_modal_window_for_editing_a_type_of_technique: string = "none";
  showing_the_modal_window_for_removing_the_employee_technician_bundle: string = "none";

  call_counter_of_the_employee_editing_window: number = 0;

  constructor(private dataService: DataService, private CHTSS: ChangingTheStateService, private http: HttpClient) {}

  ngOnInit() {
=======
  template: `
    <div class="a_huge_block">
      <system-interface (onClick)="upCase($event)" ></system-interface>
      <div
        class="div__the_substrate_of_modal_windows"
        [style]="{display:opening_the_modal_menu}"
      >
        <div
          class="div__a_block_for_positioning"
        >
          <div
            class="div__modal_window_for_adding_an_employee"
            [style]="{display:opening_the_modal_menu__staff}"
          > <!-- Модальное окно для добавления сотрудников -->
            <div
              class="div__the_background_of_the_full_NAME_input_field"
            >
              <label for="Full_NAME_input_field">ФИО сотрудника</label>
              <input placeholder="Введите ФИО" id="Full_NAME_input_field" [(ngModel)]="data_employees_full_name"/>
            </div>
            <div
              class="div__the_background_of_the_cabinet_number_input_field"
            >
              <label for="the_field_for_entering_the_cabinet_number">Номер кабинета сотрудника</label>
              <input placeholder="Введите номер кабинета" id="the_field_for_entering_the_cabinet_number" [(ngModel)]="data_employees_office_number"/>
            </div>
            <div
              class="div__the_background_of_the_control_buttons"
            >
              <button (click)="hidingTheModalWindow('staff')">Отмена</button>
              <button (click)="sendingDataAboutTheCreationofANewEmployee();hidingTheModalWindow('staff')">Добавление</button>
            </div>
          </div>
          <div
            class="div__modal_window_for_adding_equipment"
            [style]="{display:opening_the_modal_menu__technic}"
          > <!-- Модальное окно для добавления техники -->
            <div
              class="div__the_substrate_for_entering_the_name_of_the_equipment"
            >
              <label for="the_field_for_entering_the_name_of_the_equipment">Введите наименование техники</label>
              <input placeholder="Введите наименование" id="the_field_for_entering_the_name_of_the_equipment" [(ngModel)]="data_name_of_the_equipment"/>
            </div>
            <div
              class="div__the_substrate_for_choosing_the_type_of_equipment"
            >
              <label for="list_of_types_of_equipment">Выберите тип техники</label>
              <select id="list_of_types_of_equipment" [(ngModel)]="data_name_of_the_selected_type_of_equipment">
                <option value="" hidden disabled selected>Тип техники</option>
                @for ( type_of_equipment of an_array_of_technical_data; track $index ) {
                  <option value="{{ type_of_equipment }}">{{ type_of_equipment }}</option>
                }
              </select>
            </div>
            <div
              class="div__the_background_of_the_control_buttons"
            >
              <button (click)="hidingTheModalWindow('technic')">Отмена</button>
              <button (click)="sendingDataAboutAddingEquipment();hidingTheModalWindow('technic')">Добавление</button>
            </div>
          </div>
          <div
            class="div__modal_window_for_adding_types_of_equipment"
            [style]="{display:opening_the_modal_menu__type_of_equipment}"
          > <!-- Модальное окно для добавления типа техники -->
            <div
              class="div__the_substrate_for_entering_the_name_of_the_equipment"
            >
              <label for="the_field_for_entering_the_name_of_the_type_of_equipment">Введите наименование типа техники</label>
              <input placeholder="Введите наименвоание" id="the_field_for_entering_the_name_of_the_type_of_equipment" [(ngModel)]="data_the_name_of_the_introduced_type_of_equipment"/>
            </div>
            <div
              class="div__the_background_of_the_control_buttons"
            >
              <button (click)="hidingTheModalWindow('type_of_equipment')">Отмена</button>
              <button (click)="sendingDataAboutAddingATypeOfEquipment();hidingTheModalWindow('type_of_equipment')">Добавление</button>
            </div>
          </div>
          <div
            class="div__modal_window_for_adding_equipment_to_employees"
            [style]="{display:opening_the_modal_menu__employee_equipment}"
          > <!-- Модальное окно для соотношения техники с сотрудниками -->
            <div
              class="div__employee_selection_background"
            >
              <label for="employee_selection_list">Выберите сотрудника</label>
              <select id="employee_selection_list" [(ngModel)]="Full_name_of_the_selected_employee">
                <option value="" hidden disabled selected>ФИО сотрудника</option>
                @for ( FCs of array_of_full_names_of_employees; track $index ) {
                  <option value="{{FCs}}">{{ FCs }}</option>
                }
              </select>
            </div>
            <div
              class="div__the_substrate_of_the_choice_of_technique"
            >
              <label for="list_of_equipment_names">Выберите технику</label>
              <select id="list_of_equipment_names" [(ngModel)]="name_of_the_selected_equipment">
                <option value="" hidden disabled selected>Название техники</option>
                @for ( name of array_of_equipment_names; track $index ) {
                  <option value="{{name}}">{{ name }}</option>
                }
              </select>
            </div>
            <div
              class="div__the_background_of_the_control_buttons"
            >
              <button (click)="hidingTheModalWindow('employee_equipment')">Отмена</button>
              <button (click)="sendingDataToAddTheRatioOfAnEmployeeToATechnique();hidingTheModalWindow('employee_equipment')">Добавление</button>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  styles: `
    .a_huge_block {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: grey;
    }
    .div__the_substrate_of_modal_windows {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0,0,0,0.8);
    }
    .div__a_block_for_positioning {
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .div__modal_window_for_adding_an_employee {
      width: 500px;
      height: 500px;
      background-color: white;
      padding: 5px;
      position: relative;
    }
    .div__the_background_of_the_full_NAME_input_field {
      width: 100%;
      padding-top: 20px;
    }
    .div__the_background_of_the_full_NAME_input_field label {
      display: block;
    }
    .div__the_background_of_the_cabinet_number_input_field {
      width: 100%;
      padding-top: 20px;
    }
    .div__the_background_of_the_cabinet_number_input_field label {
      display: block;
    }
    .div__the_background_of_the_control_buttons {
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
    .div__the_background_of_the_control_buttons button {
      margin-left: 10px;
    }
    .div__modal_window_for_adding_equipment {
      width: 500px;
      height: 500px;
      background-color: white;
      padding: 5px;
      position: relative;
    }
    .div__the_substrate_for_entering_the_name_of_the_equipment {
      width: 100%;
      padding-top: 20px;
    }
    .div__the_substrate_for_entering_the_name_of_the_equipment label {
      display: block;
    }
    .div__the_substrate_for_choosing_the_type_of_equipment {
      width: 100%;
      padding-top: 20px;
    }
    .div__the_substrate_for_choosing_the_type_of_equipment label {
      display: block;
    }
    .div__modal_window_for_adding_types_of_equipment {
      width: 500px;
      height: 500px;
      background-color: white;
      padding: 5px;
      position: relative;
    }
    .div__modal_window_for_adding_equipment_to_employees {
      width: 500px;
      height: 500px;
      background-color: white;
      padding: 5px;
      position: relative;
    }
    .div__employee_selection_background {
      width: 100%;
      padding-top: 20px;
    }
    .div__employee_selection_background label {
      display: block;
    }
    .div__the_substrate_of_the_choice_of_technique {
      width: 100%;
      padding-top: 20px;
    }
    .div__the_substrate_of_the_choice_of_technique label {
      display: block;
    }
  `,
})
export class AppComponent {

  constructor(private dataService: DataService, private CHTSS: ChangingTheStateService, private http: HttpClient) {
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
    this.http.get('http://localhost:3000/staff', {observe: 'response'}).subscribe(res => {
      this.dataService.changingEmployeeData(res.body);
    });
    this.http.get('http://localhost:3000/technic', {observe: 'response'}).subscribe(res => {
      this.dataService.changingTechnologyData(res.body);
    });
    this.http.get('http://localhost:3000/type_of_equipment', {observe: 'response'}).subscribe(res => {
      this.dataService.changingDataOnTypesOfEquipment(res.body);
    });
    this.http.get('http://localhost:3000/employee_equipment', {observe: 'response'}).subscribe(res => {
      this.dataService.changingEmployeeEquipmentData(res.body);
<<<<<<< HEAD
    });

    this.CHTSS.dataAboutTheRemovalOfAnEmployee.subscribe((fcs: string) => {
      if (fcs != '') {
        this.employee_s_full_name = fcs;
        this.showing_the_employee_removal_window = "block";
        this.opening_the_modal_menu = "block";
      }
    });
    this.CHTSS.dataOnTheRemovalOfEquipment.subscribe((name: string) => {
      if (name != '') {
        this.name_of_the_remote_equipment = name;
        this.showing_the_modal_window_for_removing_equipment = "block";
        this.opening_the_modal_menu = "block";
      }
    });
    this.CHTSS.dataOnTheRemovalOfTheTypeOfEquipment.subscribe((name: string) => {
      if (name != '') {
        this.remote_type_of_equipment = name;
        this.showing_a_modal_window_for_deleting_a_type_of_technique = "block";
        this.opening_the_modal_menu = "block";
      }
    });
    this.CHTSS.dataOnTheRemovalOfTheEmployeeTechnicianBundle.subscribe((obj: any) => {
      if (Object.keys(obj).length != 0) {
        this.employee_technician_object = obj;
        this.showing_the_modal_window_for_removing_the_technician_employee_bundle = "block";
        this.opening_the_modal_menu = "block";
      }
    });

    this.CHTSS.employeeEditingData.subscribe((employee_index: number) => {
      if (this.call_counter_of_the_employee_editing_window > 0) {
        this.searchForAnEmployeeToEdit(employee_index);
        this.showing_the_employee_editing_window = "block";
        this.opening_the_modal_menu = "block";
      }
      if (employee_index == 0) {
        this.call_counter_of_the_employee_editing_window = this.call_counter_of_the_employee_editing_window + 1;
      }
    });
    this.CHTSS.informationAboutEditingEquipment.subscribe((technic_index: number) => {
      if (technic_index != 0) { 
        this.searchForAnEditablePieceOfEquipment(technic_index);
        this.selectionOfAllTypesOfEquipment();
        this.showing_a_modal_window_for_changing_the_technique = "block";
        this.opening_the_modal_menu = "block";
      }
    });
    this.CHTSS.informationAboutEditingTheTypeOfEquipment.subscribe((type_of_equipment_index: number) => {
      if (type_of_equipment_index != 0) {
        this.searchForAnEditableTypeOfEquipment(type_of_equipment_index);
        this.showing_a_modal_window_for_editing_a_type_of_technique = "block";
        this.opening_the_modal_menu = "block";
      }
    });
    this.CHTSS.dataOnEditingTheEmployeeTechnicianBundle.subscribe((employee_equipment_index: number) => {
      if (employee_equipment_index != 0) {
        this.searchForTheEditingObjectOfTheEmployeeTechnicianBundle(employee_equipment_index);
        this.selectionOfFullNamesOfAllEmployees();
        this.selectionOfAllTheNamesOfTheEquipment();
        this.name_of_the_employee_s_current_equipment = this.dataService.gettingInformationAboutTheEquipmentOfEmployees()[employee_equipment_index].name;
        this.showing_the_modal_window_for_removing_the_employee_technician_bundle = "block";
        this.opening_the_modal_menu = "block";
      }
    });
  }

  gettingDataAboutTheTypeOfEquipment() {
    this.an_array_of_technical_data = this.dataService.obtainingDataOnTheTypesOfEquipment();
  }

  gettingInformationAboutTheFullNameOfEmployees() {
    this.array_of_full_names_of_employees = this.dataService.gettingEmployeeData();
  }

  obtainingDataOnAllNamesOfEquipment() {
    this.array_of_equipment_names = this.dataService.gettingInformationAboutTheEquipment();
=======
  });
  }

  opening_the_modal_menu: string = "none";
  opening_the_modal_menu__staff: string = "none";
  opening_the_modal_menu__technic: string = "none";
  opening_the_modal_menu__type_of_equipment: string = "none";
  opening_the_modal_menu__employee_equipment: string = "none";

  data_employees_full_name: string = "";
  data_employees_office_number: number = 0;

  data_name_of_the_equipment: string = "";
  data_name_of_the_selected_type_of_equipment: string = "";

  data_the_name_of_the_introduced_type_of_equipment: string = "";

  Full_name_of_the_selected_employee: string = "";
  the_account_number_of_the_selected_employee: number = 0;
  name_of_the_selected_equipment: string = "";
  the_type_of_equipment_selected: string = "";

  an_array_of_technical_data: Array<string> = [];
  array_of_full_names_of_employees: Array<string> = [];
  array_of_equipment_names: Array<string> = [];

  gettingDataAboutTheTypeOfEquipment() {
    for (const object of this.dataService.gettingInformationAboutTheEquipment()) {
      this.an_array_of_technical_data.push(object.type);
    }
  }

  gettingInformationAboutTheFullNameOfEmployees() {
    for (const object of this.dataService.gettingEmployeeData()) {
      this.array_of_full_names_of_employees.push(object.fcs);
    }
  }

  obtainingDataOnAllNamesOfEquipment() {
    for (const object of this.dataService.gettingInformationAboutTheEquipment()) {
      this.array_of_equipment_names.push(object.name);
    }
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
  }

  upCase(modal: string) {
    this.opening_the_modal_menu = "block";
    if (modal == 'staff') {
      this.opening_the_modal_menu__staff = "block";
    }
    if (modal == 'technic') {
      this.gettingDataAboutTheTypeOfEquipment();
      this.opening_the_modal_menu__technic = "block";
    }
    if (modal == 'type_of_equipment') {
      this.opening_the_modal_menu__type_of_equipment = "block";
    }
    if (modal == 'employee_equipment') {
      this.gettingInformationAboutTheFullNameOfEmployees();
      this.obtainingDataOnAllNamesOfEquipment();
      this.opening_the_modal_menu__employee_equipment = "block";
    }
  }

  hidingTheModalWindow(modal: string) {
    this.opening_the_modal_menu = "none";
    if (modal == 'staff') {
      this.opening_the_modal_menu__staff = "none";
<<<<<<< HEAD
      this.data_employees_full_name = "";
      this.data_employees_office_number = "";
=======
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
    }
    if (modal == 'technic') {
      this.opening_the_modal_menu__technic = "none";
    }
    if (modal == 'type_of_equipment') {
      this.opening_the_modal_menu__type_of_equipment = "none";
    }
    if (modal == 'employee_equipment') {
      this.opening_the_modal_menu__employee_equipment = "none";
    }
  }

  sendingDataAboutTheCreationofANewEmployee() { 
    try {
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3000/staff');
      xhr.setRequestHeader('Content-Type', 'application/json');
<<<<<<< HEAD
      xhr.send(JSON.stringify({FCs: this.data_employees_full_name, office: Number(this.data_employees_office_number)}));
=======
      xhr.send(JSON.stringify({FCs: this.data_employees_full_name, office: this.data_employees_office_number}));
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
    } catch (error) {
      console.log(error);
    }
    this.CHTSS.updateComponentStaff.next('true');
  }

  sendingDataAboutAddingEquipment() {
<<<<<<< HEAD
    
=======
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
    try {
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3000/technic');
      xhr.setRequestHeader('Content-Type', 'application/json');
<<<<<<< HEAD
      xhr.send(JSON.stringify({name:this.data_name_of_the_equipment, type_of_equipment_id: Number(this.data_name_of_the_selected_type_of_equipment)}));
=======
      xhr.send(JSON.stringify({name:this.data_name_of_the_equipment, type:this.data_name_of_the_selected_type_of_equipment}));
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
    } catch (error) {
      console.log(error);
    }
    this.CHTSS.updateComponentTechnic.next('true');
  }

  sendingDataAboutAddingATypeOfEquipment() {
    try {
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3000/type_of_equipment');
      xhr.setRequestHeader('Content-Type', 'application/json');
<<<<<<< HEAD
      xhr.send(JSON.stringify({type: this.data_the_name_of_the_introduced_type_of_equipment}));
=======
      xhr.send(JSON.stringify({name: this.data_the_name_of_the_introduced_type_of_equipment}));
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
    } catch (error) {
      console.log(error);
    }
    this.CHTSS.updateComponentTypeOfEquipment.next('true');
  }

  sendingDataToAddTheRatioOfAnEmployeeToATechnique() {
<<<<<<< HEAD
=======
    for (const object of this.dataService.gettingEmployeeData()) {
      if ( object.FCs == this.Full_name_of_the_selected_employee ) {
        this.the_account_number_of_the_selected_employee = object.office;
      }
    }
    for (const object of this.dataService.gettingInformationAboutTheEquipment()) {
      if ( object.name == this.name_of_the_selected_equipment ) {
        this.the_type_of_equipment_selected = object.type;
      }
    }
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
    try {
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3000/employee_equipment');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({
<<<<<<< HEAD
        employee_id: Number(this.id_of_the_selected_employee),
        id_of_the_equipment: Number(this.id_of_the_selected_equipment)
=======
        FCs: this.Full_name_of_the_selected_employee, 
        office: this.the_account_number_of_the_selected_employee,
        technic: `${this.the_type_of_equipment_selected} / ${this.name_of_the_selected_equipment}`

>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
      }));
    } catch (error) {
      console.log(error);
    }
    this.CHTSS.updateComponentEmployeeEquipment.next('true');
  }

<<<<<<< HEAD
  hidingTheModalWindowForDeletingEmployees() {
    this.showing_the_employee_removal_window = "none";
    this.opening_the_modal_menu = "none";
  }
  hidingTheModalWindowForDeletingEquipment() {
    this.showing_the_modal_window_for_removing_equipment = "none";
    this.opening_the_modal_menu = "none";
  }
  hidingTheModalWindowForDeletingATypeOfTechnique() {
    this.showing_a_modal_window_for_deleting_a_type_of_technique = "none";
    this.opening_the_modal_menu = "none";
  }
  hidingTheModalWindowForDeletingTheTechnicianEmployeeBundle() {
    this.showing_the_modal_window_for_removing_the_technician_employee_bundle = "none";
    this.opening_the_modal_menu = "none";
  }

  hidingTheChangeWindow(window_name: string) {
    if (window_name == 'staff') {
      this.showing_the_employee_editing_window = "none";
      this.opening_the_modal_menu = "none";
    }
    if (window_name == 'technic') {
      this.showing_a_modal_window_for_changing_the_technique = "none";
      this.opening_the_modal_menu = "none";
    }
    if (window_name == 'type_of_equipment') {
      this.showing_a_modal_window_for_editing_a_type_of_technique = "none";
      this.opening_the_modal_menu = "none";
    }
    if (window_name == 'employee_equipment') {
      this.showing_the_modal_window_for_removing_the_employee_technician_bundle = "none";
      this.opening_the_modal_menu = "none";
    }
  }

  searchForAnEmployeeToEdit(employee_index: number) {
    this.the_object_of_the_employee_being_edited = this.dataService.gettingEmployeeData()[employee_index];
  }
  searchForAnEditablePieceOfEquipment(technic_index: number) {
    this.the_object_of_the_edited_technique = this.dataService.gettingInformationAboutTheEquipment()[technic_index - 1];
  }
  searchForAnEditableTypeOfEquipment(type_of_equipment_index: number) {
    this.an_object_of_the_type_of_equipment_being_edited = this.dataService.obtainingDataOnTheTypesOfEquipment()[type_of_equipment_index - 1];
  }
  searchForTheEditingObjectOfTheEmployeeTechnicianBundle(employee_equipment_index: number) {
    this.the_object_of_editing_the_employee_technician_bundle = this.dataService.gettingInformationAboutTheEquipmentOfEmployees()[employee_equipment_index];
  }

  selectionOfAllTypesOfEquipment() {
    this.an_array_of_all_types_of_equipment = this.dataService.obtainingDataOnTheTypesOfEquipment().filter((obj: any) => obj.type);
  }
  selectionOfFullNamesOfAllEmployees() {
    this.list_of_full_names_of_all_employees = this.dataService.gettingEmployeeData().filter((obj: any) => obj.fcs);
  }
  selectionOfAllTheNamesOfTheEquipment() {
    this.list_of_names_of_all_equipment = this.dataService.gettingInformationAboutTheEquipment().filter((obj: any) => obj.name);
  }

  sendingChangesToTheEmployeesFullName() {
    try {
      let xhr = new XMLHttpRequest();
      xhr.open('PUT', 'http://localhost:3000/staff');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(this.the_object_of_the_employee_being_edited));
    } catch (error) {
      console.log(error);
    }
    this.CHTSS.updateComponentStaff.next('true');
  }
  sendingDataAboutChangesInEquipment() {
    try {
      let xhr = new XMLHttpRequest();
      xhr.open('PUT', 'http://localhost:3000/technic');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(this.the_object_of_the_edited_technique));
    } catch (error) {
      console.log(error);
    }
    this.CHTSS.updateComponentTechnic.next('true');
  }
  sendingAModifiedTypeOfEquipment() {
    try {
      let xhr = new XMLHttpRequest();
      xhr.open('PUT', 'http://localhost:3000/type_of_equipment');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(this.an_object_of_the_type_of_equipment_being_edited));
    } catch (error) {
      console.log(error);
    }
    this.CHTSS.updateComponentTypeOfEquipment.next('true');
  }
  sendingAnEditedEmployeeTechnicianBundle() {
    let an_object_with_an_office = this.dataService.gettingEmployeeData().find((item: any) => {
      if (item.fcs == this.the_object_of_editing_the_employee_technician_bundle.fcs) {
        return item;
      }
    }).office;
    let theTypeOfEquipmentSelected: string = this.dataService.gettingInformationAboutTheEquipment().find((item: any) => {
      if (item.name == this.the_object_of_editing_the_employee_technician_bundle.technic) {
        return item;
      }
    }).type;
    this.the_object_of_editing_the_employee_technician_bundle = {
      id: this.the_object_of_editing_the_employee_technician_bundle.id,
      fcs: this.the_object_of_editing_the_employee_technician_bundle.fcs,
      office: an_object_with_an_office,
      technic: theTypeOfEquipmentSelected + " / " + this.the_object_of_editing_the_employee_technician_bundle.technic
    };
    try {
      let xhr = new XMLHttpRequest();
      xhr.open('PUT', 'http://localhost:3000/employee_equipment');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(this.the_object_of_editing_the_employee_technician_bundle));
    } catch (error) {
      console.log(error);
    }
    this.CHTSS.updateComponentEmployeeEquipment.next('true');
  }

=======
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
}
