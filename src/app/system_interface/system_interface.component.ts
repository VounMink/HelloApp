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
                <button (click)=visualizationOfTheEmployeeComponent()>сотрудники</button>
                <button (click)=visualizationOfAComponentOfATechnique()>техника</button>
                <button (click)=visualizationOfTheComponentOfTheTypesOfEquipment()>типы техники</button>
                <button (click)=visualizationOfTheComponentOfEmployeeEquipment()>техника сотрудников</button>
                <button (click)=visualizationOfTheInventoryComponent()>инвентаризация</button>    
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
<<<<<<< HEAD
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
=======
            position: relative;
            display: inline-block;
            background-color: white;
            padding: 10px 10px 10px 10px;
        }
        .div__button_field {
            text-align: center;
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
        }
        .div__button_field button {
            padding: 5px 10px 5px 10px;

            background-color: rgba(0,0,0,0);

<<<<<<< HEAD
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
=======
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
>>>>>>> 1d4cdc3fe98120f9d213d753182eacf7080d9fa5
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