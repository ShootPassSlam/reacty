import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import styles from './Person.module.css';

const person = (props) => {
    
    return (
        <Container className={styles.Person}>
            <Row>
                <Col xs="6" sm="4">
                    <p className={styles.Title}>Id:</p>
                    <p>{props.id}</p>
                </Col>
                <Col xs="6" sm="4">
                    <p className={styles.Title}>Name:</p>
                    <p>{props.name}</p>
                </Col>
                <Col xs="6" sm="4">
                    <p className={styles.Title}>Number:</p>
                    <p>{props.number}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default person;