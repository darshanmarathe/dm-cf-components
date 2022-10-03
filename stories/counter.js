import { Component, html , Tag } from "componentforge";

export default class Counter extends Component {

    Template() {
        return html`Counter : ${this.state.count} <br>
            <button @click=${(e) => this.AddCount()}>+</button>
            <button @click=${(e) => this.SubCount()}>-</button>
        `
    }

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }   

    AddCount(){
        this.setState({count : this.state.count +1 })
    }

    SubCount(){
        this.setState({count : this.state.count - 1 })
    }




    Style(){
        return ''
    }


}


Tag('d-counter' , Counter)