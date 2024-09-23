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
                <button (click)=visualizationOfTheEmployeeComponent()>Сотрудники</button>
                <button (click)=visualizationOfAComponentOfATechnique()>Техника</button>
                <button (click)=visualizationOfTheComponentOfTheTypesOfEquipment()>Типы техники</button>
                <button (click)=visualizationOfTheComponentOfEmployeeEquipment()>Техника сотрудников</button>
                <button (click)=visualizationOfTheInventoryComponent()>Инвентаризация</button>    
            </div>
            <div
                class="div__component_visualization_field"
            >
                @if (VisualizeTheEmployeeComponent) {
                    <staff (onClick)="upCase($event)"></staff>
                }
                @if (VisualizeAComponentOfTheTechnique) {
                    <technic (onClick)="upCase($event)"></technic>
                }
                @if (VisualizeTheComponentOfTheTypesOfEquipment) {
                    <type-of-equipment (onClick)="upCase($event)"></type-of-equipment>
                }
                @if (VisualizeTheComponentOfEmployeeEquipment) {
                    <employee-equipment (onClick)="upCase($event)"></employee-equipment>
                }
                @if (VisualizeTheInventoryComponent) {
                    <inventory></inventory>
                }
            </div>
        </div>
    `,
    styles: `
        .div__system_interface_field {
            position: relative;
            display: inline-block;
            background-color: white;
            padding: 10px 10px 10px 10px;
        }
        .div__button_field {
            text-align: center;
        }
        .div__button_field button {
            padding: 5px 10px 5px 10px;

            background-color: rgba(0,0,0,0);

            border-top: 1px solid grey;
            border-bottom: 1px solid grey;
            border-left: 1px solid grey;
            border-right: none;
        }
        .div__button_field button:last-child {
            border-right: 1px solid grey;
        }
        .div__component_visualization_field {
            width: 800px;
            height: 500px;
            outline: 1px solid grey;
        }
    `,
})

export class SystemInterface {

    @Input() updateComponentStaff: boolean = false;
    @Output() onClick = new EventEmitter()

    VisualizeTheEmployeeComponent = true;
    VisualizeAComponentOfTheTechnique = false;
    VisualizeTheComponentOfTheTypesOfEquipment = false;
    VisualizeTheComponentOfEmployeeEquipment = false;
    VisualizeTheInventoryComponent = false;

    visualizationOfTheEmployeeComponent() {
        this.VisualizeTheEmployeeComponent = true;
        this.VisualizeAComponentOfTheTechnique = false;
        this.VisualizeTheComponentOfTheTypesOfEquipment = false;
        this.VisualizeTheComponentOfEmployeeEquipment = false;
        this.VisualizeTheInventoryComponent = false;
    }
    visualizationOfAComponentOfATechnique() {
        this.VisualizeTheEmployeeComponent = false;
        this.VisualizeAComponentOfTheTechnique = true;
        this.VisualizeTheComponentOfTheTypesOfEquipment = false;
        this.VisualizeTheComponentOfEmployeeEquipment = false;
        this.VisualizeTheInventoryComponent = false;
    }
    visualizationOfTheComponentOfTheTypesOfEquipment() {
        this.VisualizeTheEmployeeComponent = false;
        this.VisualizeAComponentOfTheTechnique = false;
        this.VisualizeTheComponentOfTheTypesOfEquipment = true;
        this.VisualizeTheComponentOfEmployeeEquipment = false;
        this.VisualizeTheInventoryComponent = false;
    }
    visualizationOfTheComponentOfEmployeeEquipment() {
        this.VisualizeTheEmployeeComponent = false;
        this.VisualizeAComponentOfTheTechnique = false;
        this.VisualizeTheComponentOfTheTypesOfEquipment = false;
        this.VisualizeTheComponentOfEmployeeEquipment = true;
        this.VisualizeTheInventoryComponent = false;
    }
    visualizationOfTheInventoryComponent() {
        this.VisualizeTheEmployeeComponent = false;
        this.VisualizeAComponentOfTheTechnique = false;
        this.VisualizeTheComponentOfTheTypesOfEquipment = false;
        this.VisualizeTheComponentOfEmployeeEquipment = false;
        this.VisualizeTheInventoryComponent = true;
    }

    upCase(modal: string) {
        this.onClick.emit(modal)
    }
}