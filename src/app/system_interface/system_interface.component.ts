import { Component } from '@angular/core';
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
                    <staff></staff>
                }
                @if (VisualizeAComponentOfTheTechnique) {
                    <technic></technic>
                }
                @if (VisualizeTheComponentOfTheTypesOfEquipment) {
                    <type-of-equipment></type-of-equipment>
                }
                @if (VisualizeTheComponentOfEmployeeEquipment) {
                    <employee-equipment></employee-equipment>
                }
                @if (VisualizeTheInventoryComponent) {
                    <inventory></inventory>
                }
            </div>
        </div>
    `,
    styles: '',
})

export class SystemInterface {
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
}