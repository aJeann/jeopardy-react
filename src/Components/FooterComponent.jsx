import React from 'react'
import { Container, Row } from 'react-bootstrap';
import PlayerCards from './PlayerCards';

const FooterComponent = () => {

    return (
        <div style={{paddingBottom: "30px", paddingTop: "30px", backgroundColor: "black"}}>
            <Container>
                <Row>
                    <PlayerCards />
                </Row>
            </Container>
            
        </div>
    )
}

export default FooterComponent
