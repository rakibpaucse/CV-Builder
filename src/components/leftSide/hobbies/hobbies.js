import React from 'react'
import SecondaryComponent from '../../util/makeComponent/secondaryComponent/secondary'
import {useSelector  } from 'react-redux'


const Hobbies = () => {

    const tabName = useSelector(({leftReducer}) => Object.keys(leftReducer)[7])


    return (
        <SecondaryComponent label={tabName} />
    )
}

export default Hobbies
 