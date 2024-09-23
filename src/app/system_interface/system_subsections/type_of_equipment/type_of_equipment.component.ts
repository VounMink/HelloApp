import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../../../data.service';
import { ChangingTheStateService } from '../../../change/changing-the-state.service';

@Component({
    selector: 'type-of-equipment',
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
                <button (click)="onClick.emit('type_of_equipment')">Добавить тип техники</button>
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
                        <th class="column_2">Наименование</th>
                        <th class="column_3"></th>
                        <th class="column_4"></th>
                    </tr>
                </thead>
                <tbody>
                    @for ( type_of_equipment of dataOnTheTypesOfEquipment; track type_of_equipment.id ) {
                        <tr>
                            <th>{{ type_of_equipment.id }}</th>
                            <th>{{ type_of_equipment.name }}</th>
                            <th>
                                <button>-</button>
                            </th>
                            <th >
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
            width: 8%;
            padding: 5px 5px 5px 5px;
        }
        .column_2 {
            width: 50%;
            padding: 5px 5px 5px 5px;
        }
        .column_3 {
            width: 5%;
        }
        .column_4 {
            width: 5%;
        }
    `
})

export class TypeOfEquipment implements OnInit {

    dataOnTheTypesOfEquipment: any = [];

    a_visible_list_of_component_types_of_equipment: Array<Object> = [];

    @Output() onClick = new EventEmitter();

    constructor(private dataService: DataService, private http: HttpClient, private CHTSS: ChangingTheStateService) {
        this.CHTSS.updateComponentTypeOfEquipment.subscribe(() => {
            this.ngOnInit();
        });
    }

    ngOnInit() {
        this.http.get('http://localhost:3000/type_of_equipment', {observe: 'response'}).subscribe(res => {
            this.dataOnTheTypesOfEquipment = res.body;
            this.dataService.changingDataOnTypesOfEquipment(res.body);
        });
    }
}