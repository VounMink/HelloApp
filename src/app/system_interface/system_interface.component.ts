import { Component, EventEmitter, Output, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Staff } from './system_subsections/staff/staff.component';
import { Technic } from './system_subsections/technic/technic.component';
import { TypeOfEquipment } from './system_subsections/type_of_equipment/type_of_equipment.component';
import { EmployeeEquipment } from './system_subsections/employee_equipment/employee_equipment.component';
import { Inventory } from './system_subsections/inventory/inventory.component';

@Component({
    selector: 'system-interface',
    standalone: true,
    imports: [RouterOutlet, Staff, Technic, TypeOfEquipment, EmployeeEquipment, Inventory],
    template: `
        <div
            class="div__system_interface_field"
        >
            <div
                class="div__button_field"
            >
                <button (click)="displayComponent(0)">сотрудники</button>
                <button (click)="displayComponent(1)">техника</button>
                <button (click)="displayComponent(2)">типы техники</button>
                <button (click)="displayComponent(3)">техника сотрудников</button>
                <button (click)="displayComponent(4)">инвентаризация</button>    
            </div>
            <div
                class="div__component_visualization_field"
            >
                <staff
                    class="staff"
                    [style]="{ display: displaying_components[0] }"
                    (onClick)="upCase($event)"
                ></staff>
                <technic
                    class="technic"
                    [style]="{ display: displaying_components[1] }"
                    (onClick)="upCase($event)"
                ></technic>
                <type-of-equipment
                    class="type-of-equipment"
                    [style]="{ display: displaying_components[2] }"
                    (onClick)="upCase($event)"
                ></type-of-equipment>
                <employee-equipment
                    class="employee-equipment"
                    [style]="{ display: displaying_components[3] }"
                    (onClick)="upCase($event)"
                ></employee-equipment>
                <inventory
                    class="inventory"
                    [style]="{ display: displaying_components[4] }"
                ></inventory>
            </div>
        </div>
    `,
    styles: `
        .div__system_interface_field {
            display: flex;
            width: 1000px;
            height: 800px;
            background-color: white;
            flex-direction: column;
            align-items: stretch;
        }
        .div__button_field {
            text-align: center;
            margin-bottom: 45px;
        }
        .div__button_field button {
            padding: 5px 10px 5px 10px;

            background-color: rgba(0,0,0,0);

            border: none;
            font-family: "Inter", sans-serif;
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
            color: #25255F;
        }
        .div__component_visualization_field {
            width: 100%;
            max-height: inherit;
            height: 100%;
            background: rgb(223,160,200);
            background: linear-gradient(45deg, rgba(223,160,200,0.4962185557816877) 0%, rgba(223,160,200,1) 50%, rgba(223,160,200,0.4962185557816877) 100%);
            border-radius: 40px;
        }
        .staff {
            height: 100%;
        }
        .technic {
            height: 100%;
        }
        .type-of-equipment {
            height: 100%;
        }
        .employee-equipment {
            height: 100%;
        }
        .inventory {
            height: 100%;
        }
    `,
})

export class SystemInterface {

    @Input() updateComponentStaff: boolean = false;
    @Output() onClick = new EventEmitter()

    displaying_components: Array<string> = ["block","none","none","none","none"];

    displayComponent(index: number) {
        this.displaying_components = this.displaying_components.map((item: any, ind: number, array: any) => ind == index ? "block" : "none" );
    }

    upCase(modal: string) {
        this.onClick.emit(modal)
    }

}