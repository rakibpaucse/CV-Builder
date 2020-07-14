import React from 'react'

const TemplateBody = ({info}) => {
    return (
        <div>
            {
                Object.keys(info).map(inf => <li> {inf} </li>)
            }
        </div>
    )
}

export default TemplateBody
