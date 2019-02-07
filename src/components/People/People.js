import React, { Component } from 'react';

import Person from './Person/Person';
import { Container } from 'reactstrap';

const locationOf = (array, value) =>{
    if (array.length === 0){
        return 0;
    }
    let low = 0,
        high = array.length;
    while (low < high) {
        let mid = (low + high) >>> 1;
        if (array[mid]["number"] > value) low = mid + 1;
        else high = mid;
    }
    return low;
}

class people extends Component {

    state = {
        people: [],
        endpoint: 'wss://mighty-shore-74194.herokuapp.com/'
    }

    componentDidMount(){
        this.socket = new WebSocket(this.state.endpoint);
        this.socket.onopen = () => {
            this.socket.send('init');
        }
        this.socket.onmessage = e => {
            var message = null;
            try {
                message = JSON.parse(e.data);
            } catch(e) {
                console.log('malformed message');
            }
            if (message) {
                const people = [...this.state.people];
                const location = locationOf(people, message.value);
                if(!people[location] || people[location]["number"]!== message.value){
                    people.splice(location, 0, {id: message.id, name: message.name, number: message.value});
                }else if(people[location]["number"]=== message.value){
                    people.splice(location, 1, {id: message.id, name: message.name, number: message.value});
                }
                this.setState({people:people});
            }
        } 
    }

    componentWillUnmount(){
        this.socket.close();
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.people !== this.state.people;
    }

    render(){
        // console.log("In the render:", this.state.people);
        return (
            <Container>{
                this.state.people.map( person => {
                    return <Person
                        key = {person.number}
                        number = {person.number}
                        name = {person.name}
                        id = {person.id}/>
                })
            }</Container>
        )
    }
}

export default people;