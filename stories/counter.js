import { Component, html , Tag } from "componentforge";

export default class Counter extends Component {

    Template() {
        return html`<b>Counter :</b>  ${this.state.count} <br>
            <button @click=${(e) => this.AddCount()}>+</button>
            <button @click=${(e) => this.SubCount()}>-</button>
        `
    }

    constructor(){
        super()
        this.state = {
            count : +this.props.count || 0
        }
    }   

    AddCount(){
        this.setState({count : this.state.count +1 })
        this.fireEvent('change' , 'count' , this.state.count)
    }

    SubCount(){
        this.setState({count : this.state.count - 1 })
        this.fireEvent('change' , 'count' , this.state.count)
    }




    Style(){
        return ''
    }


}


Tag('dm-counter' , Counter)