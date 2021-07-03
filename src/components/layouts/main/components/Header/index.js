import React, { memo } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "../../../../../assets/images/logo.png"
import "./header.css";

function Header() {
    const menus = [
        { label: 'HOME', value: 'home', link: '/' },
        { label: 'SHOP', value: 'shop', link: '#' },
        { label: 'FAQ', value: 'faq', link: '#' }
    ]
    return (
        <section className="header">
            <Container fluid={true}>
                <Row>
                    <Col md="3" className="logo">
                        <img alt="logo" src={Logo} />
                    </Col>
                    <Col md="7" className="menu">
                        {
                            menus.map((menu, idx) => {
                                return (
                                    <div key={idx}>
                                        <a href={menu.link} className={idx === 0 ? 'active' : ''}>{menu.label}</a>
                                    </div>
                                )
                            })
                        }
                    </Col>
                    <Col md="2" className="cart">
                        <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 37 40"><path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"></path></svg>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default memo(Header)