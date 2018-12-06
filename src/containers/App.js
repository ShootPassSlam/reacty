import React, { Component } from 'react';
import './App.css';
import People from '../components/People/People';
import Topbar from '../components/Topbar/Topbar';

class App extends Component {
    state = {
        showPeople: false,
    }

    webSocketStreamToggle = () => {
        const doesShow = this.state.showPeople;
        this.setState({ showPeople: !doesShow});
    }
    
    shouldComponentUpdate(nextProps, nextState){
        return nextState.showPeople !== this.state.showPeople;
    }

    render() {
        let people = null
        if (this.state.showPeople) {
            people = <People />
        }

        return (
            <div className="App">
                <Topbar
                    title = "Dominic Scotto Homework"
                    buttonState = {this.state.showPeople}
                    clicked = {this.webSocketStreamToggle} />
                {people}
            </div>
        );
    }
}

export default App;
