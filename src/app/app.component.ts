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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app_style_dop.component.css'],
})
export class AppComponent implements OnInit {

  open__modal_menu: string = "none";
  open__modal_menu__staff: string = "none";
  open__modal_menu__technic: string = "none";
  open__modal_menu__type_of_equipment: string = "none";
  open__modal_menu__employee_equipment: string = "none";

  string__employees_full_name: string = "";
  number__employees_office_number: any = "";

  string__name_equipment: string = "";
  string__selected_type_equipment: string = "";

  string__type_equipment_introduced: string = "";

  string__selected_employee: string = "";
  number__id_selected_equipment: any = "";

  array__types_of_equipment: any = [];
  array__staff: any = [];
  array__technic: any = [];

  string__FCs_employee_s: string = "";
  string__name_remote_equipment: string = "";
  string__remote_type_equipment: string = "";
  object__bundle: any = {};

  string__show_deletion_window__employee: string = "none";
  string__show_deletion_window__equipment: string = "none";
  string__show_deletion_window__type_of_technique: string = "none";
  string__show_deletion_window__bundle: string = "none";

  object__edited_employee: any = {};
  object__edited_technique: any = {};
  array__all_types_of_equipment: Array<string> = [];
  object__edited_type_of_equipment: any = {};
  object__edited_bundle: any = {};
  array__full_name_of_all_employees: Array<string> = [];
  array__all_names_of_equipment: Array<string> =  [];
  string__employee_s_current_equipment: String = "";

  string__show_editing_window__employee: string = "none";
  string__show_editing_window__equipment: string = "none";
  string__show_editing_window__type_of_technique: string = "none";
  string__show_editing_window__bundle: string = "none";

  constructor(private dataService: DataService, private CHTSS: ChangingTheStateService, private http: HttpClient) {}

  ngOnInit() {
    this.getTypesOfEquipment();
    this.getStaff();
    this.getTechnic();
    
    this.CHTSS.deleteEmployee.subscribe((fcs: string) => {
      if (fcs != '') {
        this.string__FCs_employee_s = fcs;
        this.string__show_deletion_window__employee = "block";
        this.open__modal_menu = "block";
      }
    });
    this.CHTSS.deleteEquipment.subscribe((name: string) => {
      if (name != '') {
        this.string__name_remote_equipment = name;
        this.string__show_deletion_window__equipment = "block";
        this.open__modal_menu = "block";
      }
    });
    this.CHTSS.deleteTypeOfEquipment.subscribe((name: string) => {
      if (name != '') {
        this.string__remote_type_equipment = name;
        this.string__show_deletion_window__type_of_technique = "block";
        this.open__modal_menu = "block";
      }
    });
    this.CHTSS.deleteBundle.subscribe((obj: any) => {
      if (Object.keys(obj).length != 0) {
        this.object__bundle = obj;
        this.string__show_deletion_window__bundle = "block";
        this.open__modal_menu = "block";
      }
    });

    this.CHTSS.editEmployee.subscribe((index__employee: number) => {
      if (index__employee) {
        this.searchEditedEmployee(index__employee);
        this.string__show_editing_window__employee = "block";
        this.open__modal_menu = "block";
      }
    });
    this.CHTSS.editEquipment.subscribe((index__equipment: number) => {
      if (index__equipment != 0) { 
        this.searchEditableEquipment(index__equipment);
        this.selectionAllTypesOfEquipment();
        this.string__show_editing_window__equipment = "block";
        this.open__modal_menu = "block";
      }
    });
    this.CHTSS.editTypeOfEquipment.subscribe((index__type_of_equipment: number) => {
      if (index__type_of_equipment != 0) {
        this.searchEditableTypeOfEquipment(index__type_of_equipment);
        this.string__show_editing_window__type_of_technique = "block";
        this.open__modal_menu = "block";
      }
    });
    this.CHTSS.editingBundle.subscribe((index__bundle: number) => {
      if (index__bundle != 0) {
        this.searchTheBundleObjectBeingEdited(index__bundle);
        this.selectionFullNamesAllEmployees();
        this.selectionAllTheNamesTheEquipment();
        this.getServerRequests('GET', 'employee_equipment', null, (e: any) => {
          e = Array.from(JSON.parse(e));
          this.string__employee_s_current_equipment = e.find((item: any) => item.id == index__bundle ? true : false).name;
        });
        this.string__show_editing_window__bundle = "block";
        this.open__modal_menu = "block";
      }
    });
  }

  getServerRequests(method: string, address_edge: string, request_body: any, call: any) {
    function getTT(callback: any) {
      let xhr = new XMLHttpRequest();
      xhr.open(method, `http://localhost:3000/${address_edge}`);
      if (method == 'GET') {
        xhr.send();
        xhr.onload = function() {
          if (xhr.status == 200) {
              callback(xhr.response);
          }
        }
      }
      if (method == 'POST' || method == 'PUT') {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(request_body);
        xhr.onload = function() {
          if (xhr.status == 200) {
            callback(Array.from(JSON.parse(xhr.response)));
          }
        }
      } 
    }
    getTT((e: any) => {
      if (method == 'GET') call(e);
      if (method == 'POST' || method == 'PUT') call(e);
    });
  }

  getTypesOfEquipment() {
    this.getServerRequests('GET', 'type_of_equipment', null , (e: any) => {
      this.array__types_of_equipment = Array.from(JSON.parse(e));
    });
  }
  getStaff() {
    this.getServerRequests('GET', 'staff', null , (e: any) => {
      this.array__staff = Array.from(JSON.parse(e));
    });
  }
  getTechnic() {
    this.getServerRequests('GET', 'technic', null , (e: any) => {
      this.array__technic = Array.from(JSON.parse(e));
    });
  }

  upCase(modal: string) {
    this.open__modal_menu = "block";
    if (modal == 'staff') {
      this.open__modal_menu__staff = "block";
    }
    if (modal == 'technic') {
      this.open__modal_menu__technic = "block";
    }
    if (modal == 'type_of_equipment') {
      this.open__modal_menu__type_of_equipment = "block";
    }
    if (modal == 'employee_equipment') {
      this.open__modal_menu__employee_equipment = "block";
    }
  }
  hidingTheModalWindow(modal: string) {
    this.open__modal_menu = "none";
    if (modal == 'staff') {
      this.open__modal_menu__staff = "none";
      this.string__employees_full_name = "";
      this.number__employees_office_number = "";
    }
    if (modal == 'technic') {
      this.open__modal_menu__technic = "none";
    }
    if (modal == 'type_of_equipment') {
      this.open__modal_menu__type_of_equipment = "none";
    }
    if (modal == 'employee_equipment') {
      this.open__modal_menu__employee_equipment = "none";
    }
  }

  sendingDataAboutTheCreationofANewEmployee() { 
    try {
      this.getServerRequests('POST', 'staff', JSON.stringify({FCs:this.string__employees_full_name, office:Number(this.number__employees_office_number)}) , (e: any) => {
        this.CHTSS.updateComponentStaff.next([true, e]);
        this.string__employees_full_name = "";
        this.number__employees_office_number = "";
      });
    } catch (error) {
      console.log(error);
    }
  }
  sendingDataAboutAddingEquipment() {
    try {
      this.getServerRequests('POST', 'technic', JSON.stringify({name:this.string__name_equipment, type_of_equipment_id:Number(this.string__selected_type_equipment)}) , (e: any) => {
        this.CHTSS.updateComponentTechnic.next([true, e]);
        this.string__name_equipment = "";
        this.string__selected_type_equipment = "";
      });
    } catch (error) {
      console.log(error);
    }
  }
  sendingDataAboutAddingATypeOfEquipment() {
    try {
      this.getServerRequests('POST', 'type_of_equipment', JSON.stringify({type:this.string__type_equipment_introduced}) , (e: any) => {
        // this.CHTSS.updateComponentTechnic.next([true, e]);
        this.string__name_equipment = "";
        this.string__selected_type_equipment = "";
        this.CHTSS.updateComponentTypeOfEquipment.next([true, e]);
        this.string__type_equipment_introduced = "";
      });
    } catch (error) {
      console.log(error);
    }
  }
  sendingDataToAddTheRatioOfAnEmployeeToATechnique() {
    try {
      this.getServerRequests('POST', 'employee_equipment', JSON.stringify({employee_id:Number(this.string__selected_employee),id_of_the_equipment:Number(this.number__id_selected_equipment)}) , (e: any) => {
        this.CHTSS.updateComponentEmployeeEquipment.next([true, e]);
        this.string__selected_employee = "";
        this.number__id_selected_equipment = "";
      });
    } catch (error) {
      console.log(error);
    }
  }

  hidingTheModalWindowForDeletingEmployees() {
    this.string__show_deletion_window__employee = "none";
    this.open__modal_menu = "none";
  }
  hidingTheModalWindowForDeletingEquipment() {
    this.string__show_deletion_window__equipment = "none";
    this.open__modal_menu = "none";
  }
  hidingTheModalWindowForDeletingATypeOfTechnique() {
    this.string__show_deletion_window__type_of_technique = "none";
    this.open__modal_menu = "none";
  }
  hidingTheModalWindowForDeletingTheTechnicianEmployeeBundle() {
    this.string__show_deletion_window__bundle = "none";
    this.open__modal_menu = "none";
  }

  hidingTheChangeWindow(window_name: string) {
    if (window_name == 'staff') {
      this.string__show_editing_window__employee = "none";
      this.open__modal_menu = "none";
    }
    if (window_name == 'technic') {
      this.string__show_editing_window__equipment = "none";
      this.open__modal_menu = "none";
    }
    if (window_name == 'type_of_equipment') {
      this.string__show_editing_window__type_of_technique = "none";
      this.open__modal_menu = "none";
    }
    if (window_name == 'employee_equipment') {
      this.string__show_editing_window__bundle = "none";
      this.open__modal_menu = "none";
    }
  }

  searchEditedEmployee(index__employee: number) {
    this.getServerRequests('GET', 'staff', null , (e: any) => {
      this.object__edited_employee = Array.from(JSON.parse(e)).find((item: any) => item.id == index__employee ? true : false);
    });
  }
  searchEditableEquipment(index__equipment: number) {
    this.getServerRequests('GET', 'technic', null , (e: any) => {
      this.object__edited_technique = Array.from(JSON.parse(e)).find((item: any) => item.id == index__equipment ? true : false);
    });
  }
  searchEditableTypeOfEquipment(index__type_of_equipment: number) {
    this.getServerRequests('GET', 'type_of_equipment', null , (e: any) => {
      this.object__edited_type_of_equipment = Array.from(JSON.parse(e)).find((item: any) => item.id == index__type_of_equipment ? true : false);
    });
  }
  searchTheBundleObjectBeingEdited(index__bundle: number) {
    this.getServerRequests('GET', 'employee_equipment', null , (e: any) => {
      this.object__edited_bundle = Array.from(JSON.parse(e)).find((item: any) => item.id == index__bundle ? true : false);
    });
  }

  selectionAllTypesOfEquipment() {
    this.getServerRequests('GET', 'type_of_equipment', null , (e: any) => {
      this.array__all_types_of_equipment = e.filter((obj: any) => obj.type);
    });
  }
  selectionFullNamesAllEmployees() {
    this.getServerRequests('GET', 'staff', null , (e: any) => {
      this.array__full_name_of_all_employees = Array.from(JSON.parse(e)).map((obj: any) => obj.fcs);
    });
  }
  selectionAllTheNamesTheEquipment() {
    this.getServerRequests('GET', 'technic', null , (e: any) => {
      this.array__all_names_of_equipment = Array.from(JSON.parse(e)).map((obj: any) => obj.name);
    });
  }

  sendingChangesToTheEmployeesFullName() {
    try {
      this.getServerRequests('PUT', 'staff', JSON.stringify(this.object__edited_employee) , (e: any) => {
        this.CHTSS.updateComponentStaff.next([true, e]);
      });
    } catch (error) {
      console.log(error);
    }
  }
  sendingDataAboutChangesInEquipment() {
    try {
      this.getServerRequests('PUT', 'technic', JSON.stringify(this.object__edited_technique) , (e: any) => {
        this.CHTSS.updateComponentTechnic.next([true, e]);
      });
    } catch (error) {
      console.log(error);
    }
  }
  sendingAModifiedTypeOfEquipment() {
    try {
      this.getServerRequests('PUT', 'type_of_equipment', JSON.stringify(this.object__edited_type_of_equipment) , (e: any) => {
        this.CHTSS.updateComponentTypeOfEquipment.next([true, e]);
      });
    } catch (error) {
      console.log(error);
    }
  }
  sendingAnEditedEmployeeTechnicianBundle() {
    let an_object_with_an_office: any = "";
    let theTypeOfEquipmentSelected: string = "";
    this.getServerRequests('GET', 'staff', null , (e: any) => {
      an_object_with_an_office = e.find((item: any) => item.fcs == this.object__edited_bundle.fcs ? true : false).office;
    });
    this.getServerRequests('GET', 'technic', null , (e: any) => {
      theTypeOfEquipmentSelected = e.find((item: any) => item.name == this.object__edited_bundle.technic ? true : false).type;
    });
    this.object__edited_bundle = {
      id: this.object__edited_bundle.id,
      fcs: this.object__edited_bundle.fcs,
      office: an_object_with_an_office,
      technic: theTypeOfEquipmentSelected + " / " + this.object__edited_bundle.technic
    };
    try {
      this.getServerRequests('PUT', 'employee_equipment', JSON.stringify(this.object__edited_bundle) , (e: any) => {
        this.CHTSS.updateComponentEmployeeEquipment.next([true, e]);
      });
    } catch (error) {
      console.log(error);
    }
  }

}
