import { Component, Output, EventEmitter, OnInit, Input, NgModule, AfterContentChecked } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../../../data/data.service';
import { ChangingTheStateService } from '../../../change/changing-the-state.service';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'staff',
    standalone: true,
    imports: [HttpClientModule, FormsModule],
    providers: [DataService],
    template: `
        <div
            class="div__component_field"
        >
            <div
                class="div__the_background_of_the_add_button"
            >
                <button (click)="onClick.emit('staff')">Добавить сотрудника</button>
            </div>
            <div
                class="div__the_background_of_the_search_field"
            >
                <input type="text" placeholder="Поиск" id="search" name="search" [(ngModel)]="the_value_of_the_search_string" (keyup.enter)="performingASearchByAGivenValue()"/>
            </div>
            <table>
                <thead>
                    <tr>
                        <th class="column_1">Таб №</th>
                        <th class="column_2">ФИО</th>
                        <th class="column_3">Кабинет</th>
                        <th class="column_4"></th>
                        <th class="column_5"></th>
                    </tr>
                </thead>
                <tbody>
                    @for ( employee of a_visible_list_of_the_satellite_component; track employee.id ) {
                        <tr>
                            <th>{{ employee.id }}</th>
                            <th>{{ employee.fcs }}</th>
                            <th>{{ employee.office }}</th>
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
            <div
                class="div__the_field_of_page_switching_buttons"
            >
                @if (the_number_of_pages_in_the_list >= 2) {
                    <button (click)="changingTheDisplayedListPage(index_of_the_current_page - 1)">Назад</button>
                    @for ( page_number of array_of_page_numbers; track $index ) {
                        <button (click)="changingTheDisplayedListPage($index)">{{ page_number }}</button>
                    }
                    <button (click)="changingTheDisplayedListPage(index_of_the_current_page + 1)">Вперёд</button>
                }
            </div>
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
            width: 9%;
            padding: 5px 5px 5px 5px;
        }
        .column_2 {
            width: 40%;
            padding: 5px 5px 5px 5px;
        }
        .column_3 {
            width: 10%;
            padding: 5px 5px 5px 5px;
        }
        .column_4 {
            width: 5%;
        }
        .column_5 {
            width: 5%;
        }
    `
})

export class Staff implements OnInit, AfterContentChecked {

    @Input() updateStaff: boolean = false;
    @Output() onClick = new EventEmitter();

    a_visible_list_of_the_satellite_component: any = [];
    the_value_of_the_search_string: any;

    a_list_divided_into_parts: any = [];

    the_number_of_pages_in_the_list: number = 0;

    array_of_page_numbers: any = [];

    index_of_the_current_page: number = 0;

    kipi: number = 1;

    constructor(private dataService: DataService, private http: HttpClient, private CHTSS: ChangingTheStateService){
        this.CHTSS.updateComponentStaff.subscribe(() => {
            this.ngOnInit();
        });
    }

    performingASearchByAGivenValue() {
        let value: number = this.the_value_of_the_search_string;
        let found_people = this.a_visible_list_of_the_satellite_component.filter((obj: any) => {
            if (obj.fcs.includes(this.the_value_of_the_search_string)) {
                return obj;
            }
            if (isNaN(value*1) == false) {
                if (obj.office == (value*1)) {
                    return obj;
                }
            }
        });
        this.a_visible_list_of_the_satellite_component = found_people;
    }

    splittingTheListIntoParts(array: any, chunkSize: number): any {
        if (array.length != 0) {
            let res = [];
            for ( let i = 0; i < array.length; i += chunkSize ) {
                let chunk = array.slice(i, i + chunkSize);
                res.push(chunk);
            }
            return res;
        }
    }

    countingTheNumberOfPagesOfTheOutputList(split_list: any): number {
        return split_list.length;
    }

    creatingAnArrayOfNumbers(number_of_pages: number) {
        this.array_of_page_numbers = Array.from({length:number_of_pages}, (_, i) => i + 1);
    }

    changingTheDisplayedListPage(page_number: number) {
        this.a_visible_list_of_the_satellite_component = this.a_list_divided_into_parts[page_number];
    }

    ngOnInit() {
        this.http.get('http://localhost:3000/staff', {observe: 'response'}).subscribe(res => {
            this.dataService.changingEmployeeData(res.body);
            this.a_visible_list_of_the_satellite_component = res.body;
        });
    }
    
    ngAfterContentChecked() {
        this.a_list_divided_into_parts = this.splittingTheListIntoParts(this.a_visible_list_of_the_satellite_component, 14);
        if ( this.a_list_divided_into_parts.length != 0 ) {
            this.a_visible_list_of_the_satellite_component = this.a_list_divided_into_parts[this.index_of_the_current_page];
        }
        this.the_number_of_pages_in_the_list = this.countingTheNumberOfPagesOfTheOutputList(this.a_list_divided_into_parts);
        this.creatingAnArrayOfNumbers(this.the_number_of_pages_in_the_list);
    }
}