import { LitElement, html } from 'lit-element';


class Todo extends LitElement {

    render() {
        return html`
        <p>Hello !</p>
        `;
    }
}

customElements.define('todo-strike', Todo);