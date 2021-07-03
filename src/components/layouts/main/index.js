import React, { memo } from 'react';
import { PreOrder, Header, Footer } from '../main/components'

function MainLayout ({children}) {
    return (
        <>
            <PreOrder/>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}

export default memo(MainLayout)