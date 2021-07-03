import React, { memo } from 'react';

function AuthLayout ({children}) {
    return (
        <div>
            Auth layout
            <div>{children}</div>
        </div>
       
    )
}

export default memo(AuthLayout)