import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from '../../src/assests/images/headerimg.png';
const Header = () => {
    return (
        <div style={{ marginTop: "148px", height: "60vh" }}>
            <Container >
                <Row>
                    <Col className="headerContentArea">
                        <h2 className='headerHeading'>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit.
                            Donec sit amet semper erat. </h2>
                        <div style={{marginTop:"60px"}}>
                        <button type="button" className="btn btn-outline-secondary Action1">Action 1</button>
                        <button type="button" className="btn btn-outline-secondary Action2">Action 2</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header