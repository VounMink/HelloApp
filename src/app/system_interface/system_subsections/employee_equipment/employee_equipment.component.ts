import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../../../data.service';
import { ChangingTheStateService } from '../../../change/changing-the-state.service';

@Component({
    selector: 'employee-equipment',
    standalone: true,
    imports: [HttpClientModule],
    providers: [DataService],
    template: `
        <div
            class="div__component_field"
        >
            <div
                class="div__the_background_of_the_add_button"
            >
                <button (click)="onClick.emit('employee_equipment')">Добавить тип техники</button>
            </div>
            <div
                class="div__the_background_of_the_search_field"
            >
                <input type="search" placeholder="Поиск"/>
            </div>
            <table>
                <thead>
                    <tr>
                        <th class="column_1">№</th>
                        <th class="column_2">Сотрудник</th>
                        <th class="column_3">Каб</th>
                        <th class="column_4">Техника</th>
                        <th class="column_5"></th>
                        <th class="column_6"></th>
                    </tr>
                </thead>
                <tbody>
                    @for ( employees_technique of informationAboutTheEquipmentOfEmployees; track employees_technique.id  ) {
                        <tr>
                            <th>{{ employees_technique.id }}</th>
                            <th>{{ employees_technique.FCs }}</th>
                            <th>{{ employees_technique.office }}</th>
                            <th>{{ employees_technique.technic }}</th>
                            <th>
                                <button>-</button>
                            </th>
                            <th>
                                <button>R</button>
                            </th>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    `,
    styles: `
        .div__component_field {
            width: 100%;
            heigth: 100%;
        }
        .div__the_background_of_the_add_button {
            width: 100%;
            text-align: center;

            padding: 20px 0px 0px 0px;
        }
        .div__the_background_of_the_add_button button {
            padding: 5px 15px 5px 15px;
            background-color: rgba(0,0,0,0);
            border: none;
            outline: 1px solid grey;
        }
        .div__the_background_of_the_search_field {
            width: 100%;
            padding: 20px 0px 0px 0px;
            text-align: center;
        }
        .div__the_background_of_the_search_field input {
            width: 70%;
            padding: 0px 0px 0px 15px;
        }
        table {
            width: 70%;

            border-collapse: collapse;
            border: 1px solid grey;

            margin-top: 15px;
            margin-left: auto;
            margin-right: auto;
        }
        tr, th {
            border: 1px solid grey;
        }
        .column_1 {
            width: 1%;
            padding: 5px 5px 5px 5px;
        }
        .column_2 {
            width: 39%;
            padding: 5px 5px 5px 5px;
        }
        .column_3 {
            width: 4%;
            padding: 5px 5px 5px 5px;
        }
        .column_4 {
            width: 39%;
            padding: 5px 5px 5px 5px;
        }
        .column_5 {
            width: 8%;
            padding: 5px 5px 5px 5px;
        }
        .column_6 {
            width: 8%;
            padding: 5px 5px 5px 5px;
        }
    `
})

export class EmployeeEquipment implements OnInit {

    informationAboutTheEquipmentOfEmployees: any = [];

    a_visible_list_of_the_employee_equipment_component: Array<Object> = [];

    @Output() onClick = new EventEmitter();

    constructor(private dataService: DataService, private http: HttpClient, private CHTSS: ChangingTheStateService) {
        this.CHTSS.updateComponentEmployeeEquipment.subscribe(() => {
            this.ngOnInit();
        });
    }

    ngOnInit() {
        this.http.get('http://localhost:3000/employee_equipment', {observe: 'response'}).subscribe(res => {
            this.informationAboutTheEquipmentOfEmployees = res.body;
            this.dataService.changingEmployeeEquipmentData(res.body);
        });
    }
}