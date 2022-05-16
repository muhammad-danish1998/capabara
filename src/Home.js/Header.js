import React from 'react'
import { Col, Row } from 'react-bootstrap'
import headerImg from '../../src/assests/images/headerimg.png';
const Header = () => {
    return (
        <div>
            <Row className='headertopmain'>
                <Col xs={12} sm={12} lg={5} xl={5} className='leftHeader'>
                    <h2>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Donec sit amet semper erat. </h2>
                    <p style={{margin:"30px 0px"}}>Mauris ipsum enim, volutpat at diam imperdiet,
                        suscipit luctus purus. Etiam sodales, est et tempus</p>
                    <button type="button" className="btn btn-outline-secondary callAction">Call to Action</button>
                    <button type="button" className="btn btn-link callAction2">Call to Action 2</button>
                </Col>
                <Col xs={12} sm={12} lg={7} xl={7} className='RightHeader'>
                    <img src={headerImg} alt="headerImg" />
                </Col>
            </Row>
        </div>
    )
}

export default Header