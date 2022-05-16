import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from '../../src/assests/images/headerimg.png';


const SectionTwo = () => {
    return (
        <div className='sectionTwoMain'>
            <Container>
                <Row >
                    <Col xs={12} sm={12} md={12} lg={12} style={{ marginTop: "64px", marginBottom: "20px" }}>
                        <h2 style={{ textAlign: "center" }} className="sectionTwoHeading">Lorem ipsum dolor sit amet, consectetur. </h2>
                    </Col>
                </Row>
                <Row className='sectionTwoBody'>
                    <Col xs={12} sm={12} md={6} lg={6} className="sectionTwoLeft">
                        <img src={headerImg} alt="headerImg" />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} className="sectionTwoLeft">
                        <h3 className="sectionTwoSubHeading">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec sit amet semper.</h3>
                        <p style={{ textAlign: "justify" }}>Mauris facilisis, risus sed eleifend luctus, magna arcu iaculis purus,
                            et pretium diam massa eget nisl. Donec gravida lacinia enim, non dapibus massa.
                            Curabitur facilisis massa tortor, mattis tempus massa posuere vel.</p>
                        <button type="button" className="btn btn-outline-secondary LearnMore">Learn More</button>
                    </Col>
                </Row>
                {/* ====================== part2 =======  */}
                <Row className='sectionTwoBody'>

                    <Col xs={12} sm={12} md={6} lg={6} className="sectionTwoLeft">
                        <h3 className="sectionTwoSubHeading">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec sit amet semper.</h3>
                        <p style={{ textAlign: "justify" }}>Mauris facilisis, risus sed eleifend luctus, magna arcu iaculis purus,
                            et pretium diam massa eget nisl. Donec gravida lacinia enim, non dapibus massa.
                            Curabitur facilisis massa tortor, mattis tempus massa posuere vel.</p>
                        <button type="button" className="btn btn-outline-secondary LearnMore">Learn More</button>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} className="sectionTwoLeft">
                        <img src={headerImg} alt="headerImg" />
                    </Col>
                </Row>
                {/* ====================== part3 =======  */}
                <Row className='sectionTwoBody'>
                    <Col xs={12} sm={12} md={6} lg={6} className="sectionTwoLeft">
                        <img src={headerImg} alt="headerImg" />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} className="sectionTwoLeft">
                        <h3 className="sectionTwoSubHeading">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec sit amet semper.</h3>
                        <p style={{ textAlign: "justify" }}>Mauris facilisis, risus sed eleifend luctus, magna arcu iaculis purus,
                            et pretium diam massa eget nisl. Donec gravida lacinia enim, non dapibus massa.
                            Curabitur facilisis massa tortor, mattis tempus massa posuere vel.</p>
                        <button type="button" className="btn btn-outline-secondary LearnMore">Learn More</button>
                    </Col>

                </Row>
                {/* ====================== part4 =======  */}
                <Row className='sectionTwoBody'>

                    <Col xs={12} sm={12} md={6} lg={6} className="sectionTwoLeft">
                        <h3 className="sectionTwoSubHeading">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec sit amet semper.</h3>
                        <p style={{ textAlign: "justify" }}>Mauris facilisis, risus sed eleifend luctus, magna arcu iaculis purus,
                            et pretium diam massa eget nisl. Donec gravida lacinia enim, non dapibus massa.
                            Curabitur facilisis massa tortor, mattis tempus massa posuere vel.</p>
                        <button type="button" className="btn btn-outline-secondary LearnMore">Learn More</button>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} className="sectionTwoLeft">
                        <img src={headerImg} alt="headerImg" />
                    </Col>
                </Row>
                {/* ====================== part5 =======  */}
                <Row className='sectionTwoBody'>
                    <Col xs={12} sm={12} md={6} lg={6} className="sectionTwoLeft">
                        <img src={headerImg} alt="headerImg" />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} className="sectionTwoLeft">
                        <h3 className="sectionTwoSubHeading">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec sit amet semper.</h3>
                        <p style={{ textAlign: "justify" }}>Mauris facilisis, risus sed eleifend luctus, magna arcu iaculis purus,
                            et pretium diam massa eget nisl. Donec gravida lacinia enim, non dapibus massa.
                            Curabitur facilisis massa tortor, mattis tempus massa posuere vel.</p>
                        <button type="button" className="btn btn-outline-secondary LearnMore">Learn More</button>
                    </Col>
                </Row>
            </Container>
            <Row style = {{backgroundColor:"#EFEFEF" }}>
                    <Col xs={12} sm={12} md={12} lg={12} style={{ textAlign: "center", marginTop: "50px"}}>
                        <h1>Lorem ipsum dolor sit amet,<br />
                            consectetur adipiscing elit. Join now!</h1>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} style={{ textAlign: "center", marginTop: "37px", marginBottom: "126px" }}>
                        <button type="button" className="btn btn-outline-secondary LearnMore">Call to Action</button>
                    </Col>
                </Row>
        </div>
    )
}

export default SectionTwo