import React from 'react'
import SecondaryComponent from '../../util/makeComponent/secondaryComponent/secondary'
import {useSelector  } from 'react-redux'

const Skills = () => {
    const tabName = useSelector(state => Object.keys(state)[6])

    return (
        <SecondaryComponent label={tabName} />
    )
}

export default Skills
