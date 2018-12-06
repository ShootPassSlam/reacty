import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const topbar = (props) => {
    let buttonTitle = "Connect To Websocket";
    let buttonColor = "success";
    if (props.buttonState === true){
        buttonTitle = "Disconnect From Websocket";
        buttonColor = "warning";
    }

    return (
        <Jumbotron>
            <h1 className="display-3">{props.title}</h1>
            <Button color= {buttonColor}
                onClick={props.clicked}>{buttonTitle}</Button>
        </Jumbotron>
    );
};

export default topbar;