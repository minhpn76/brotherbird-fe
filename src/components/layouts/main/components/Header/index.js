import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "../../../../../assets/images/logo.png"
import "./header.css";
import pathRoutes from '../../../../../helper/pathRoutes'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { BACKGROUD_CODE } from '../../../../../helper/consts'
import { cloneDeep, isEmpty } from 'lodash';
import { shopStart } from '../../../../../modules/home/redux'
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchCollections } from '../../../../../modules/collection/redux';
import MenuMobile from '../MenuMobile';

function Header() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const menus = [
    { label: 'HOME', value: '', link: pathRoutes.home, sub: false },
    { label: 'SHOP', value: 'collections', link: pathRoutes.collection, sub: true },
    { label: 'FAQ', value: 'faq', link: pathRoutes.faq, sub: false }
  ]

  const {collections, cart, checkout} = useSelector(
    state => state.collection
  );
  const [openSub, setOpenSub] = useState(false);
  const [openMobile, setOpenMobile] = useState(false)
  const [openSubMobile, setOpenSubMobile] = useState(false)

  useEffect(() => {
    dispatch(fetchCollections())
  }, [])

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
      history.push(`${pathRoutes.collection}/${time.slugs}`)
    }
  }

  const handlePushCart = (e) => {
    e.preventDefault();
    history.push(pathRoutes.cart)
  }

  const totalCart = useMemo(() => {
    let cloneCart = cloneDeep(cart)
    if (isEmpty(cloneCart)) {
      return 0
    }
    return cart.map(i => i.quanlity).reduce((a, b) => a + b) 
  }, [cart])

  const handleToogleMobile = useCallback(() => {
    setOpenMobile(!openMobile)
  })

  const handleToogleSubMobile = useCallback(() => {
    setOpenSubMobile(!openSubMobile)
  })

  return (
    <>
    <section className="header"
      style={location.pathname === pathRoutes.home ? { background: BACKGROUD_CODE['home'] } : { background: BACKGROUD_CODE['faq'] }}>
      <Container fluid={true}>
        <Row>
          <Col xs="3" md="3" className="logo">
            <a href={pathRoutes.home}><img alt="logo" src={Logo} /></a>
          </Col>
          <Col md="7" xs="7" className="menu">
            {
              menus.map((menu, idx) => {
                return (
                  <div className="block" key={idx} style={menu.link === pathRoutes.collection ? { position: 'relative' } : {}}>
                    <div onClick={(e) => handlePushLink(e, menu.link)}
                      className={location.pathname === `/${menu.value}` && !openSub ? 'active inline-menu' : (
                        openSub
                          && (![pathRoutes.home, pathRoutes.faq].includes(menu.link)
                          || (location.pathname.includes(menu.link) && idx !== 0))
                         ? 'active inline-menu' : 'inline-menu'
                      )}
                    >
                      <span>{menu.label}</span>

                    </div>
                    {
                      menu.sub && openSub && (
                        <div className="sub-menu">
                          {
                            collections.map((time, idx) => {
                              return (
                                <div 
                                  onClick={(e) => handleSelectMonth(e, time)} 
                                  key={idx}
                                >
                                  <span>{time.collectionName?`${time.collectionName.charAt(0)}${time.collectionName.slice(1).toLowerCase()}`:''}</span>
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
          <Col md="2" xs="9" className="cart">
            <div 
              onClick={(e) => handlePushCart(e)}
              style={{position: 'relative'}}
            >
              <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 37 40"><path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"></path></svg>
              {totalCart > 0 && <span className="numberItem">{totalCart}</span>}
              
            </div>
            <div className="nav_mobile"
              onClick={() => handleToogleMobile()}
            >
              {
                !openMobile ? (
                  <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-hamburger" viewBox="0 0 37 40"><path d="M33.5 25h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0-11.5h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0 23h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2z"></path></svg>
                ) : (
                  <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" viewBox="0 0 40 40"><path d="M23.868 20.015L39.117 4.78c1.11-1.108 1.11-2.77 0-3.877-1.109-1.108-2.773-1.108-3.882 0L19.986 16.137 4.737.904C3.628-.204 1.965-.204.856.904c-1.11 1.108-1.11 2.77 0 3.877l15.249 15.234L.855 35.248c-1.108 1.108-1.108 2.77 0 3.877.555.554 1.248.831 1.942.831s1.386-.277 1.94-.83l15.25-15.234 15.248 15.233c.555.554 1.248.831 1.941.831s1.387-.277 1.941-.83c1.11-1.109 1.11-2.77 0-3.878L23.868 20.015z" class="layer"></path></svg>
                )
              }
            </div>
          </Col>
        </Row>
      </Container>
      
      
    </section>
    <section>
      {
        openMobile && (
          <MenuMobile
            menus={menus}
            openMobile={openMobile}
            openMobile={openSubMobile}
            collections={collections}
            handleSelectMonth={handleSelectMonth}
            handleToogleSubMobile={handleToogleSubMobile}
          />
        )
      }
    </section>
    </>
  )
}

export default memo(Header)