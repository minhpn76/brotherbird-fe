import React, { memo } from 'react'
import gfm from 'remark-gfm'

function MarkDown ({content}) {
    const ReactMarkdown = require('react-markdown')
    return (
        <ReactMarkdown remarkPlugins={[[gfm, {singleTilde: false}]]}>
            {content}
        </ReactMarkdown>
    )
}

export default memo(MarkDown)