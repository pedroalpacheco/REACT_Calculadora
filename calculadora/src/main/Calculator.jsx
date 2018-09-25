import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component{

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigt = this.addDigt.bind(this)
    }

    clearMemory(){
        console.log('Limpa')
    }

    setOperation(operation){
        console.log(operation)
    }

    addDigt(n){
        console.log(n)
    }

    render(){
       
        return(
            <div className="calculator">
                <Display value={100}/>
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigt}/>
                <Button label="8" click={this.addDigt}/>
                <Button label="9" click={this.addDigt}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigt}/>
                <Button label="5" click={this.addDigt}/>
                <Button label="6" click={this.addDigt}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigt}/>
                <Button label="2" click={this.addDigt}/>
                <Button label="3" click={this.addDigt}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigt} double/>
                <Button label="." click={this.setOperation}/>
                <Button label="=" click={this.setOperation}/>
                
            </div>
        )
    }
}