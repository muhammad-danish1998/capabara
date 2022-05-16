import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./style/footer.css"
import logoleft from '.././assests/images/logoleft.png';
import logoright from '.././assests/images/logoright.png';


const Footer = () => {
    return (
        <div style = {{backgroundColor:"white"}}>

                <Container>
                <Row style={{backgroundColor:"#fff"}}>
                    <Col xs={12} sm={12} md={4} lg={4} className="footerLeft" >
                        {/* <p className='poweredBy'>Powered by</p> */}
                        <img src={logoleft} alt="logoleft" className='logoleft' />
                        <img src={logoright} alt="logoright" className="logoright" />
                        <p className='footerText' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur erat libero, rutrum nec auctor rutrum</p>

                    </Col>
                    <Col xs={3} sm={3} md={2} lg={2} className="footerRight">
                        <ul className='footerList'>
                            <li className='footerlistHeading'>About Us </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>

                        </ul>
                    </Col>
                    <Col xs={3} sm={3} md={2} lg={2} className="footerRight">
                        <ul className='footerList'>
                            <li className='footerlistHeading'>Features </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>

                        </ul>
                    </Col>
                    <Col xs={3} sm={3} md={2} lg={2} className="footerRight">
                        <ul className='footerList'>
                            <li className='footerlistHeading'>Templates </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>

                        </ul>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} className="footerRight">
                        <ul className='footerList'>
                            <li className='footerlistHeading'>Pricing </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>
                            <li>Content </li>

                        </ul>
                    </Col>

                </Row>
                </Container>
        
        </div>
    )
}

export default Footer