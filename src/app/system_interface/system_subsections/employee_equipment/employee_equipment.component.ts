import { Component, Output, EventEmitter, Input, NgModule, OnInit, AfterContentChecked } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../../../data/data.service';
import { ChangingTheStateService } from '../../../change/changing-the-state.service';

import { FormsModule } from '@angular/forms';
import { NgOptimizedImage, IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';

@Component({
    selector: 'employee-equipment',
    standalone: true,
    imports: [HttpClientModule, FormsModule, NgOptimizedImage],
    providers: [DataService, {
        provide: IMAGE_LOADER, 
        useValue: (config: ImageLoaderConfig) => {
            return `http://localhost:3000/icons?icon_name=${config.src}`
        }
    }],
    templateUrl: './employee_equipment.component.html',
    styleUrls: ['./employee_equipment.component.css', './employee_equipment_style_dop.component.css']
})

export class EmployeeEquipment implements OnInit, AfterContentChecked {
    
    @Input() updateEmployeeEquipment: boolean = false;
    @Output() onClick = new EventEmitter();

    array__bundle_objects: any = [];
    array__structured_data_for_a_table: any = [];
    array__bundle: any = [];

    number__the_sum_of_the_list_pages: number = 0;
    number__current_page: number = 0;
    number__skipping_requests: number = 0;

    string__search_text: any;

    array__page_numbering: any = [];
    array__data_from_the_server: any = [];

    updating_the_component: boolean = false;

    constructor(private dataService: DataService, private http: HttpClient, private CHTSS: ChangingTheStateService) {
        this.CHTSS.updateComponentEmployeeEquipment.subscribe((arr: any) => {
            if (arr[0]) {
                if (arr[1].length == 0) {
                    this.updating_the_component = true;
                    this.CHTSS.updateComponentEmployeeEquipment.next([false, []]); 
                } else {
                    this.array__bundle_objects = arr[1];
                    this.getFillingTheTable();
                }
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
          if (method == 'POST' || method == 'PUT' || method == 'DELETE') {
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
          if (method == 'POST' || method == 'PUT' || method == 'DELETE') call(e);
        });
    }

    performingASearchByAGivenValue() {
        if (String(this.string__search_text) != 'undefined' && this.string__search_text.length != 0) {
            let value: number = this.string__search_text;
            this.array__bundle_objects = this.array__bundle.filter((obj: any) => {
                if (obj.fcs.includes(this.string__search_text) || obj.name.includes(this.string__search_text) || obj.type.includes(this.string__search_text)) return obj;
                if (isNaN(value*1) == false) if (obj.office == (value*1)) return obj;
            });
            this.getFillingTheTable();
        } else {
            this.array__bundle_objects = this.array__bundle;
            this.getFillingTheTable();
        }
    }
    createStructuringTheListOfEmployees(array: any, chunkSize: number): any {
        if (array.length != 0) {
            let res = [];
            for ( let i = 0; i < array.length; i += chunkSize ) {
                let chunk = array.slice(i, i + chunkSize);
                res.push(chunk);
            }
            return res;
        }
    }
    calcTheNumberOfPagesInTheList(split_list: any): number {
        return split_list.length;
    }
    createAnArrayOfNumbers(number_of_pages: number) {
        this.array__page_numbering = Array.from({length: number_of_pages}, (_, i) => i + 1);
    }
    changingTheDisplayedListPage(page_number: number) {
        if (page_number != -1 && page_number >= 0 ) {
            this.number__current_page = page_number
            this.array__bundle_objects = this.array__structured_data_for_a_table[page_number];
        }
    }

    deleteEmployeeEquipment(employee_technician_bundle_index: number) {
        try {
            this.getServerRequests('DELETE', 'employee_equipment', JSON.stringify({id: employee_technician_bundle_index}), (e: any) => {
                let obj = this.array__bundle_objects[this.array__bundle_objects.indexOf(this.array__bundle_objects.filter((item: any) => item.id == employee_technician_bundle_index)[0])];
                this.CHTSS.deleteBundle.next({
                    name: obj.name,
                    fcs: obj.fcs,
                });
                this.array__bundle_objects = e;
                this.getFillingTheTable();
            });
        } catch (error) {
            console.log(error);
        }
    }

    editingTheEmployeeTechnicianBundle(employee_technician_bundle_index: number) {
        this.CHTSS.editingBundle.next(employee_technician_bundle_index); 
    }

    getFillingTheTable() {
        if (this.array__bundle_objects.length > 0) {
            this.array__structured_data_for_a_table = this.createStructuringTheListOfEmployees(this.array__bundle_objects, 14);
            if ( this.array__structured_data_for_a_table.length != 0 ) {
                this.array__bundle_objects = this.array__structured_data_for_a_table[this.number__current_page];
            }
            this.number__the_sum_of_the_list_pages = this.calcTheNumberOfPagesInTheList(this.array__structured_data_for_a_table);
            this.createAnArrayOfNumbers(this.number__the_sum_of_the_list_pages);
        } else {
            this.number__the_sum_of_the_list_pages = 0;
        }
    }

    getDataFromTheServer() {
        this.getServerRequests('GET', 'employee_equipment', null, (e: any) => {
            this.dataService.staff.next(this.array__data_from_the_server);
            this.array__bundle_objects = this.array__data_from_the_server = this.array__bundle = Array.from(JSON.parse(e));
            this.getFillingTheTable();
        });
    }

    ngOnInit() {
        this.dataService.technic.subscribe((res: any) => {
            if (res.length == 0) {
                this.getDataFromTheServer();
            }
            if (res.length > 0) {
                this.array__bundle_objects = res;
                this.getFillingTheTable();
            }
        });
    }

    ngAfterContentChecked() {
        if (this.updating_the_component) {
            this.getDataFromTheServer();
            this.updating_the_component = false;
        }
    }
}