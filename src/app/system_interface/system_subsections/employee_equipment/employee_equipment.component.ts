import { Component } from '@angular/core';

@Component({
    selector: 'employee-equipment',
    standalone: true,
    template: `
        <div
            class="div__component_field"
        >
            <button>Добавить тип техники</button>
            <input type="search"/>
            <table>
                <tr>
                    <th>№</th>
                    <th>Сотрудник</th>
                    <th>Каб</th>
                    <th>Техника</th>
                </tr>
            </table>
        </div>
    `,
    styles: ''
})

export class EmployeeEquipment {}