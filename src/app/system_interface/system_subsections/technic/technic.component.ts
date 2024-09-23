<<<<<<< HEAD
import { Component, Output, EventEmitter, OnInit, NgModule, Input } from '@angular/core';
=======
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../../../data/data.service';
import { ChangingTheStateService } from '../../../change/changing-the-state.service';
<<<<<<< HEAD

import { FormsModule } from '@angular/forms';
import { NgOptimizedImage, IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
=======
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5

@Component({
    selector: 'technic',
    standalone: true,
<<<<<<< HEAD
    imports: [HttpClientModule, FormsModule, NgOptimizedImage],
    providers: [DataService, {
        provide: IMAGE_LOADER,
        useValue: (config: ImageLoaderConfig) => {
            return `http://localhost:3000/icons?icon_name=${config.src}`
        }
    }],
=======
    imports: [HttpClientModule],
    providers: [DataService],
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
    template: `
        <div
            class="div__component_field"
        >
            <div
<<<<<<< HEAD
                class="div__the_field_of_the_add_and_search_buttons"
            >
                <button (click)="onClick.emit('technic')">Добавить технику</button>
                <input type="text" placeholder="Поиск" id="search" name="search" [(ngModel)]="the_value_of_the_search_string" (keyup.enter)="performingASearchByAGivenValue()"/>
            </div>
            <hr>
            <div
                class="div__table"
            >
                <div
                    class="div__table_header"
                >
                    <div
                        class="div__the_auto_numbering_column"
                    >
                        <h3>Инв №</h3>
                        <div class="div__decorative_division_No_1" ></div>
                    </div>
                    <div
                        class="div__column_with_names_of_equipment"
                    >
                        <div class="div__wrapping_h3" >
                            <h3>Наименование</h3>
                        </div>
                    </div>
                    <div
                        class="div__column_with_the_type_of_equipment"
                    >
                        <div class="div__decorative_division_No_2" ></div>
                        <h3>Тип</h3>
                    </div>
                </div>
                <div
                    class="div__the_body_of_the_table"
                >
                @for ( technic of a_visible_list_of_the_satellite_component; track $index ) {
                        <div
                            class="div__table_row"
                        >
                            <div
                                class="div__the_auto_numbering_column"
                            >
                                <h3>{{ technic.id }}</h3>
                                <div class="div__decorative_division_No_1" ></div>
                            </div>
                            <div
                                class="div__column_with_names_of_equipment"
                            >
                                <h3>{{ technic.name }}</h3>
                            </div>
                            <div
                                class="div__column_with_the_type_of_equipment"
                            >
                                <div class="div__decorative_division_No_2" ></div>
                                <h3>{{ technic.type }}</h3>
                            </div>
                            <div
                                class="div__column_with_delete_button"
                            >
                                <button (click)="removingEquipment($index)">
                                    <img ngSrc="minus.svg" width="20" height="20" alt="" />
                                </button>
                            </div>
                            <div
                                class="div__column_with_an_edit_button"
                            >
                                <button (click)="editingEquipmentData($index)">
                                    <img ngSrc="pen.svg" width="20" height="20" alt="" />
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <!-- <table>
=======
                class="div__the_background_of_the_add_button"
            >
                <button (click)="onClick.emit('technic')">Добавить технику</button>
            </div>
            <div
                class="div__the_background_of_the_search_field"
            >
                <input type="search" placeholder="Поиск"/>
            </div>
            <table>
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
                <thead>
                    <tr>
                        <th class="column_1">Инв №</th>
                        <th class="column_2">Наименование</th>
                        <th class="column_3">Тип</th>
                        <th class="column_4"></th>
                        <th class="column_5"></th>
                    </tr>
                </thead>
                <tbody>
<<<<<<< HEAD
                    @for ( technic of a_visible_list_of_the_satellite_component; track technic.id ) {
=======
                    @for ( technic of technicalData; track technic.id ) {
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
                        <tr>
                            <th>{{ technic.id }}</th>
                            <th>{{ technic.name }}</th>
                            <th>{{ technic.type }}</th>
                            <th>
<<<<<<< HEAD
                                <button (click)="removingEquipment(technic.id)">
                                    <img ngSrc="minus.svg" width="20" height="20" alt="" />
                                </button>
                            </th>
                            <th>
                            <button (click)="editingEquipmentData(technic.id)">
                                    <img ngSrc="pen.svg" width="20" height="20" alt="" />
                                </button>
=======
                                <button>-</button>
                            </th>
                            <th>
                                <button>R</button>
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
                            </th>
                        </tr>
                    }
                </tbody>
<<<<<<< HEAD
            </table> -->
            <div
                class="div__the_field_of_page_switching_buttons"
            >
                @if (the_number_of_pages_in_the_list >= 2) {
                    <button id="button__the_table_scroll_button_to_the_left" (click)="changingTheDisplayedListPage(index_of_the_current_page - 1)">
                        <svg class="svg__vector" width="8" height="13" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="svg__path_left" d="M11.6599 22.7702L12.7766 21.618C12.9257 21.4644 13 21.2876 13 21.0876C13 20.8882 12.9257 20.7114 12.7766 20.5578L3.9983 11.5001L12.7763 2.44281C12.9254 2.28919 12.9998 2.11241 12.9998 1.9127C12.9998 1.71292 12.9254 1.53614 12.7763 1.3826L11.6596 0.230542C11.5108 0.0766858 11.3395 0 11.1458 0C10.9523 0 10.781 0.0769279 10.6322 0.230542L0.223284 10.97C0.0744022 11.1236 -2.12374e-08 11.3004 -2.12374e-08 11.5001C-2.12374e-08 11.6998 0.0744022 11.8764 0.223284 12.0298L10.6322 22.7702C10.7811 22.9237 10.9524 23 11.1458 23C11.3395 23 11.5108 22.9237 11.6599 22.7702Z" fill="#596EBD"/>
                        </svg>
                    </button>
                    @for ( page_number of array_of_page_numbers; track $index ) {
                        <button 
                            [style.background-color]="$index==index_of_the_current_page ? '#596EBD' : 'rgba(0,0,0,0)'"
                            [style.color]="$index==index_of_the_current_page ? '#FFFFFF' : '#596EBD'"
                            class="button__the_button_to_go_to_the_numbered_page" 
                            id="button_{{ $index }}" 
                            (click)="changingTheDisplayedListPage($index)"
                        >{{ page_number }}</button>
                    }
                    <button id="button__the_table_scroll_button_to_the_right" (click)="changingTheDisplayedListPage(index_of_the_current_page + 1)">
                        <svg class="svg__vector" width="8" height="13" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="svg_path_right" d="M1.3401 0.229813L0.22344 1.38204C0.0743236 1.53557 0 1.71243 0 1.91238C0 2.11184 0.0743236 2.28862 0.22344 2.44216L9.0017 11.4999L0.223675 20.5572C0.0745585 20.7108 0.000234578 20.8876 0.000234578 21.0873C0.000234578 21.2871 0.0745585 21.4639 0.223675 21.6174L1.34041 22.7695C1.48921 22.9233 1.66055 23 1.85418 23C2.04766 23 2.21899 22.9231 2.3678 22.7695L12.7767 12.03C12.9256 11.8764 13 11.6996 13 11.4999C13 11.3002 12.9256 11.1236 12.7767 10.9702L2.3678 0.229813C2.21892 0.0762804 2.04758 -5.52933e-07 1.85418 -5.52933e-07C1.66055 -5.52933e-07 1.48921 0.0762804 1.3401 0.229813Z" fill="#596EBD"/>
                        </svg>
                    </button>
                }
            </div>
=======
            </table>
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
        </div>
    `,
    styles: `
        .div__component_field {
<<<<<<< HEAD
            position: relative;
            width: 100%;
            height: 100%;
        }
        .div__the_field_of_the_add_and_search_buttons {
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
        }
        .div__the_field_of_the_add_and_search_buttons button {
            height: 40px;
            flex-grow: 0.5;
            border-radius: 40px;
            border: none;
            background-color: #596EBD;
            font-family: "Inter", sans-serif;
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
            color: #FFFFFF;
            margin: 20px 20px 20px 20px;
        }
        .div__the_field_of_the_add_and_search_buttons input {
            flex-grow: 3.5;
            margin: 20px 20px 20px 0px;
            outline: 1px solid #596EBD;
            border: none;
            border-radius: 40px;
            background-color: rgba(0,0,0,0);
            background-image: url('C:/ATNJSMYSQL/HelloApp/src/assets/search.svg');
            background-position: 27px;
            background-size: 16px 16px;
            background-repeat: no-repeat;
            padding-left: 54px;
            font-family: "Inter", sans-serif;
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
            color: #25255F;
        }
        hr {
            width: 96%;
            margin: auto;
            border: 1px solid rgba(255,255,255, 0.3);
        }
        .div__table {
            margin: 20px 20px 20px 20px;
        }
        .div__table_header {
            display: flex;
            flex-direction: row;

            height: 50px;

            border-top-left-radius: 30px;
            border-top-right-radius: 30px;

            background-color: #EEF0F6;
        }
        .div__table_header .div__the_auto_numbering_column {
            display: flex;
            flex-direction: row;
            flex: 0 0 78px;
            align-items: center
        }
        .div__table_header .div__the_auto_numbering_column h3 {
            padding: 20px 10px 20px 20px;
            font-family: "Inter", sans-serif;
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
            color: #596EBD;
        }
        .div__table_header .div__the_auto_numbering_column .div__decorative_division_No_1 {
            width: 1px;
            height: 20px;
            background-color: rgba(89,110,189,0.3);
        }
        .div__table_header .div__column_with_names_of_equipment {
            width: 100%;
        }
        .div__table_header .div__column_with_names_of_equipment .div__wrapping_h3 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .div__table_header .div__column_with_names_of_equipment .div__wrapping_h3 h3 {
            font-family: "Inter", sans-serif;
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
            color: #596EBD;
        }
        .div__table_header .div__column_with_the_type_of_equipment {
            display: flex;
            flex-direction: row;
            flex: 0 0 392px;
            margin-left: auto;
            margin-right: 0px;
            align-items: center;
        }
        .div__table_header .div__column_with_the_type_of_equipment .div__decorative_division_No_2 {
            width: 1px;
            height: 20px;
            background-color: rgba(89,110,189,0.3);
        }
        .div__table_header .div__column_with_the_type_of_equipment h3 {
            font-family: "Inter", sans-serif;
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
            color: #596EBD;
            margin-left: 20px;
            margin-right: auto;
        }
        .div__the_body_of_the_table {
            width: 100%;
            display: flex;
            flex-direction: column;
            background-color: #596EBD;
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
        }
        .div__table_row {
            width: 100%;
            height: 35px;
            display: flex;
            flex-direction: row;
            border-bottom: 1px solid rgba(255,255,255,0.3);
        }
        .div__table_row:last-child {
            border-bottom: none;
        }
        .div__table_row .div__the_auto_numbering_column {
            display: flex;
            flex-direction: row;
            flex: 0 0 75px;
            align-items: center;
        }
        .div__table_row .div__the_auto_numbering_column h3 {
            font-family: "Inter", sans-serif;
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
            color: #FFFFFF;
            margin-left: auto;
            margin-right: 10px;
        }
        .div__table_row .div__the_auto_numbering_column .div__decorative_division_No_1 {
            width: 1px;
            height: 20px;
            background-color: rgba(255,255,255,0.3);
        }
        .div__table_row .div__column_with_names_of_equipment {
            width: 100%;
            display: flex;
            align-items: center;
        }
        .div__table_row .div__column_with_names_of_equipment h3 {
            font-family: "Inter", sans-serif;
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
            color: #FFFFFF;
            padding-left: 10px;
        }
        .div__table_row .div__column_with_the_type_of_equipment {
            display: flex;
            flex-direction: row;
            flex: 0 0 300px;
            margin-left: auto;
            margin-right: 0;
            align-items: center;
        }
        .div__table_row .div__column_with_the_type_of_equipment .div__decorative_division_No_2 {
            width: 1px;
            height: 20px;
            background-color: rgba(255,255,255,0.3);
        }
        .div__table_row .div__column_with_the_type_of_equipment h3 {
            font-family: "Inter", sans-serif;
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
            color: #FFFFFF;
            padding-left: 20px;
        }
        .div__table_row .div__column_with_delete_button {
            display: flex;
            flex-direction: row;
            flex: 0 0 38px;
            margin-right: 0;
            align-items: center;
        }
        .div__table_row .div__column_with_delete_button button {
            width: 28px;
            height: 28px;
            border: none;
            background-color: #EEF0F6;
            border-radius: 10px;
            display: flex;
            align-items: center;
        }
        .div__table_row .div__column_with_delete_button button img {
            width: 12px;
            margin-left: auto;
            margin-right: auto;
        }
        .div__table_row .div__column_with_an_edit_button {
            display: flex;
            flex-direction: row;
            flex: 0 0 54px;
            margin-right: 0;
            align-items: center;
        }
        .div__table_row .div__column_with_an_edit_button button {
            width: 28px;
            height: 28px;
            border: none;
            background-color: #EEF0F6;
            border-radius: 10px;
            display: flex;
            align-items: center;
        }
        .div__table_row .div__column_with_an_edit_button button img {
            width: 16px;
            margin-left: auto;
            margin-right: auto;
        }
        .div__the_field_of_page_switching_buttons {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;    
            display: flex;
            justify-content: center;
        }
        #button__the_table_scroll_button_to_the_left {
            width: 35px;
            height: 35px;
            margin-left: 20px;
            margin-bottom: 20px;
            border: 1px solid #596EBD;
            background-color: rgba(0,0,0,0);
            border-radius: 15px;
            margin-right: auto;
            display: flex;
            align-items: center;
        }
        .svg__vector {
            margin-left: auto;
            margin-right: auto;
        }
        #button__the_table_scroll_button_to_the_left:hover {
            background-color: #596EBD;
            cursor: pointer;
        }
        #svg__path_left {
            fill: #596EBD;
            pointer-events: auto;
        }
        #button__the_table_scroll_button_to_the_left:hover #svg__path_left {
            fill: #FFFFFF;
        }
        .button__the_button_to_go_to_the_numbered_page {
            width: 35px;
            height: 35px;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 20px;
            border: 1px solid #596EBD;
            background-color: rgba(0,0,0,0);
            border-radius: 14px;
            font-family: "Inter", sans-serif;
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
            color: #596EBD;
        }
        .button__the_button_to_go_to_the_numbered_page:hover {
            cursor: pointer;
        }
        #button__the_table_scroll_button_to_the_right {
            width: 35px;
            height: 35px;
            margin-left: auto;
            margin-bottom: 20px;
            border: 1px solid #596EBD;
            background-color: rgba(0,0,0,0);
            border-radius: 14px;
            margin-right: 20px;
            display: flex;
            align-items: center;
        }
        #button__the_table_scroll_button_to_the_right:hover {
            background-color: #596EBD;
            cursor: pointer;
        }
        #svg_path_right {
            fill: #596EBD;
            pointer-events: auto;
        }
        #button__the_table_scroll_button_to_the_right:hover #svg_path_right {
            fill: #FFFFFF;
        }
        // table {
        //     width: 70%;

        //     border-collapse: collapse;
        //     border: 1px solid grey;

        //     margin-top: 15px;
        //     margin-left: auto;
        //     margin-right: auto;
        // }
        // tr, th {
        //     border: 1px solid grey;
        // }
        // .column_1 {
        //     width: 8%;
        //     padding: 5px 5px 5px 5px;
        // }
        // .column_2 {
        //     width: 26%;
        //     padding: 5px 5px 5px 5px;
        // }
        // .column_3 {
        //     width: 24%;
        //     padding: 5px 5px 5px 5px;
        // }
        // .column_4 {
        //     width: 5%;
        // }
        // .column_5 {
        //     width: 5%;
        // }
=======
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
            width: 26%;
            padding: 5px 5px 5px 5px;
        }
        .column_3 {
            width: 24%;
            padding: 5px 5px 5px 5px;
        }
        .column_4 {
            width: 5%;
        }
        .column_5 {
            width: 5%;
        }
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
    `
})

export class Technic implements OnInit {

<<<<<<< HEAD
    @Input() updateTechnic: boolean = false;
    @Output() onClick = new EventEmitter();

    a_visible_list_of_the_satellite_component: any = [];
    the_value_of_the_search_string: any;

    a_list_divided_into_parts: any = [];

    the_number_of_pages_in_the_list: number = 0;

    array_of_page_numbers: any = [];

    index_of_the_current_page: number = 0;

=======
    technicalData: any = [];

    a_visible_list_of_the_equipment_component: Array<Object> = [];

    @Output() onClick = new EventEmitter();

>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
    constructor(private dataService: DataService, private http: HttpClient, private CHTSS: ChangingTheStateService) {
        this.CHTSS.updateComponentTechnic.subscribe(() => {
            this.ngOnInit();
        });
    }

<<<<<<< HEAD
    performingASearchByAGivenValue() {
        let found_people = this.a_visible_list_of_the_satellite_component.filter((obj: any) => {
            if (obj.name.includes(this.the_value_of_the_search_string)) {
                return obj;
            }
            if (obj.type.includes(this.the_value_of_the_search_string)) {
                return obj;
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
        if (page_number != -1 && page_number >= 0 ) {
            this.index_of_the_current_page = page_number
            this.a_visible_list_of_the_satellite_component = this.a_list_divided_into_parts[page_number];
        }
    }

    ngOnInit() {
        this.http.get('http://localhost:3000/technic', {observe: 'response'}).subscribe(res => {
            this.dataService.changingTechnologyData(res.body);
            this.a_visible_list_of_the_satellite_component = res.body;
            this.a_list_divided_into_parts = this.splittingTheListIntoParts(this.a_visible_list_of_the_satellite_component, 14);
            if ( this.a_list_divided_into_parts.length != 0 ) {
                this.a_visible_list_of_the_satellite_component = this.a_list_divided_into_parts[this.index_of_the_current_page];
            }
            this.the_number_of_pages_in_the_list = this.countingTheNumberOfPagesOfTheOutputList(this.a_list_divided_into_parts);
            this.creatingAnArrayOfNumbers(this.the_number_of_pages_in_the_list);
        });
    }

    removingEquipment(technology_index: number) {
        try { 
            let xhr = new XMLHttpRequest();
            xhr.open('DELETE', 'http://localhost:3000/technic');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                id: technology_index
            }));
            xhr.onload = () => {
                if (xhr.status == 200) {
                    this.CHTSS.dataOnTheRemovalOfEquipment.next(this.a_visible_list_of_the_satellite_component[technology_index].name);
                }
            };
        } catch (error) {
            console.log(error);
        }
    }

    editingEquipmentData(technology_index: number) {
        this.CHTSS.informationAboutEditingEquipment.next(technology_index);
    }
=======
    ngOnInit() {
        this.http.get('http://localhost:3000/technic', {observe: 'response'}).subscribe(res => {
            this.technicalData = res.body;
            this.dataService.changingTechnologyData(res.body);
        });
    }
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
}