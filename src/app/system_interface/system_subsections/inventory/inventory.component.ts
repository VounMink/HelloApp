import { Component } from '@angular/core';

@Component({
    selector: 'inventory',
    standalone: true,
    template: `
        <div
            class="div__component_field"
        >
            <select>
                <option>1</option>
                <option>2</option>
            </select>
            <button>Сформировать отчет</button>
        </div>
    `,
    styles: ''
})

export class Inventory {}