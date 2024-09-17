import { Component } from '@angular/core';

@Component({
    selector: 'inventory',
    standalone: true,
    template: `
        <div
            class="div__component_field"
        >
            <div
                class="div__the_background_of_the_selection_list"
            >
                <select>
                    <option value="" hidden disabled selected>Список кабинетов</option>
                </select>
            </div>
            <div
                class="div__the_background_of_the_report_generation_button"
            >
                <button (click)="goToTheReportGenerationPage()">Сформировать отчет</button>
            </div>
        </div>
    `,
    styles: `
        .div__component_field {
            width: 100%;
            heigth: 100%;
        }
        .div__the_background_of_the_selection_list {
            width: 100%;
            padding: 20px 0px 0px 0px;
            text-align: center;
        }
        .div__the_background_of_the_report_generation_button {
            width: 100%;
            padding: 20px 0px 0px 0px;
            text-align: center;
        }
        .div__the_background_of_the_report_generation_button button {
            padding: 5px 15px 5px 15px;
            background-color: rgba(0,0,0,0);
            border: 1px solid grey;
        }
    `
})

export class Inventory {

    goToTheReportGenerationPage() {

        window.open('', "_blank");

    }

}