/*eslint-env es_modules */
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class ChecklistElement extends PolymerElement {
    constructor() {
        super();
        this.listContent = ['test1', 'test2'];
    }
    
    static get template() {
        return html`
            <template is="dom-repeat" items="{{listContent}}">
                <input type="checkbox"> {{item}}<br>
            </template>
        `;
    }
}

customElements.define('checklist-element', ChecklistElement);