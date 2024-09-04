import { Component } from '@angular/core';

@Component({
    selector: 'type-of-equipment',
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
                    <th>Наименование</th>
                </tr>
            </table>
        </div>
    `,
    styles: ''
})

export class TypeOfEquipment {}