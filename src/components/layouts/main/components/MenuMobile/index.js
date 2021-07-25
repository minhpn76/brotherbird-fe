import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'
import pathRoutes from '../../../../../helper/pathRoutes'


function MenuMobile ({
    menus, openMobile, openSubMobile,
    collections, handleSelectMonth, handleToogleSubMobile
}) {
    const location = useLocation()
    return (
        <div className="menu_mobile">
            {
              menus.map((menu, idx) => {
                return (
                  <div className="block" key={idx} style={menu.link === pathRoutes.collection ? { position: 'relative' } : {}}>
                    <div onClick={(e) => {}}
                      className={location.pathname === `/${menu.value}` && !openMobile ? 'active inline-menu flex_mobile' : (
                        openMobile
                          && (![pathRoutes.home, pathRoutes.faq].includes(menu.link)
                          || (location.pathname.includes(menu.link) && idx !== 0))
                         ? 'active inline-menu flex_mobile' : 'inline-menu flex_mobile'
                      )}
                    >
                      <div>
                        {menu.label} 
                      </div>
                      {
                        menu.sub && (
                            <div className="open_sub_right">
                                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-chevron-right" viewBox="0 0 14 14"><path d="M3.871.604c.44-.439 1.152-.439 1.591 0l5.515 5.515s-.049-.049.003.004l.082.08c.439.44.44 1.153 0 1.592l-5.6 5.6a1.125 1.125 0 0 1-1.59-1.59L8.675 7 3.87 2.195a1.125 1.125 0 0 1 0-1.59z" fill="#000"></path></svg>
                            </div>
                        )
                      }

                    </div>
                    {
                      menu.sub && openSubMobile && (
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
        </div>
    )
}

export default memo(MenuMobile)