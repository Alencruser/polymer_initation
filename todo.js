import { LitElement, html } from 'lit-element';


class Todo extends LitElement {

    constructor() {
        super()
        this.todolist=[];
        this.task="";
    }

    render() {
        return html`
        <input type="text" placeholder="Tâche" .value="${this.task}" @input=${this.handleInput}>
        <button @click="${this.appendToList}">Ajouter à la liste</button> 
        <ul>${this.todolist.map(item => html`<li>${item}</li>`)}</ul>
        `;
    }
    appendToList(){
        this.todolist.push(this.task);
        console.log(this.todolist);
        this.requestUpdate();
    }

    handleInput(e){
        this.task = e.target.value;
    }

}

customElements.define('todo-strike', Todo);