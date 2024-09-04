import { Component } from '@angular/core';

@Component({
    selector: 'staff',
    standalone: true,
    template: `
        <div
            class="div__component_field"
        >
            <button>Добавить сотрудника</button>
            <input type="search"/>
            <table>
                <tr>
                    <th>Таб №</th>
                    <th>ФИО</th>
                    <th>Кабинет</th>
                </tr>
            </table>
        </div>
    `,
    styles: ''
})

export class Staff {}