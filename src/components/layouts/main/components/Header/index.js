import React, { memo, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "../../../../../assets/images/logo.png"
import "./header.css";
import pathRoutes from '../../../../../helper/pathRoutes'
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { BACKGROUD_CODE } from '../../../../../helper/consts'
import { getNearYears } from '../../../../../helper/times';
import { isEmpty } from 'lodash';
import { shopStart } from '../../../../../modules/home/redux'
import { unwrapResult } from '@reduxjs/toolkit';

function Header() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  
  const menus = [
    { label: 'HOME', value: '', link: pathRoutes.home, sub: false },
    { label: 'SHOP', value: 'collections', link: pathRoutes.collection, sub: true },
    { label: 'FAQ', value: 'faq', link: pathRoutes.faq, sub: false }
  ]
  const [openSub, setOpenSub] = useState(false);

  const handlePushLink = (e, link) => {
    e.preventDefault();
    if (!link) return;
    if (link === pathRoutes.collection) {
      setOpenSub(!openSub);
      return;
    }
    history.push(link)
  }

  const handleSelectMonth = async (e, time) => {
    e.preventDefault();
    if (isEmpty(time)) return;
    const resps = await dispatch(shopStart(time))
    const status = unwrapResult(resps);
    if (!isEmpty(status)) {
      history.push(`${pathRoutes.collection}/${status.path}`)
    }
  }

  return (
    <section className="header"
      style={location.pathname === pathRoutes.home ? { background: BACKGROUD_CODE['home'] } : { background: BACKGROUD_CODE['faq'] }}>
      <Container fluid={true}>
        <Row>
          <Col md="3" className="logo">
            <a href={pathRoutes.home}><img alt="logo" src={Logo} /></a>
          </Col>
          <Col md="7" className="menu">
            {
              menus.map((menu, idx) => {
                return (
                  <div className="block" key={idx} style={menu.link === pathRoutes.collection ? { position: 'relative' } : {}}>
                    <div onClick={(e) => handlePushLink(e, menu.link)}
                      className={location.pathname === `/${menu.value}` && !openSub ? 'active inline-menu' : (
                        openSub
                          && ![pathRoutes.home, pathRoutes.faq].includes(menu.link)
                          || (location.pathname.includes(menu.link) && idx !== 0)
                         ? 'active inline-menu' : 'inline-menu'
                      )}
                    >
                      <span>{menu.label}</span>

                    </div>
                    {
                      menu.sub && openSub && (
                        <div className="sub-menu">
                          {
                            getNearYears().map((time, idx) => {
                              return (
                                <div 
                                  onClick={(e) => handleSelectMonth(e, time)} 
                                  key={idx}
                                >
                                  <span>{time.label}</span>
                                </div>
                              )
                            })
                          }
                        </div>
                      )
                    }
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