import { Component } from '@angular/core';

@Component({
    selector: 'technic',
    standalone: true,
    template: `
        <div
            class="div__component_field"
        >
            <button>Добавить технику</button>
            <input type="search"/>
            <table>
                <tr>
                    <th>Инв №</th>
                    <th>Наименование</th>
                    <th>Тип</th>
                </tr>
            </table>
        </div>
    `,
    styles: ''
})

export class Technic {}