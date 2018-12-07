import React from 'react';
import { Row, Col } from 'reactstrap';

import styles from './Person.module.css';

const person = (props) => {
    return (
            <Row className={[styles.Person, styles.NewListItem].join(" ")}>
                <Col xs="6" sm="4">
                    <p className={styles.Title}>Number:</p>
                    <p className={styles.Body}>{props.number}</p>
                </Col>
                <Col xs="6" sm="4">
                    <p className={styles.Title}>Name:</p>
                    <p className={styles.Body}>{props.name}</p>
                </Col>
                <Col xs="6" sm="4">
                    <p className={styles.Title}>Id:</p>
                    <p className={styles.Body}>{props.id}</p>
                </Col>
            </Row>
    );
}

export default React.memo(person);