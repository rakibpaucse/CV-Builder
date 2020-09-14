import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux'
import MakeCard from '../../util/card'




const Acton = () => {

    const shouldReset = useSelector(({rightReducer}) => rightReducer.action.shouldReset)
    const getDemoData = useSelector(({rightReducer}) => rightReducer.action.getDemoData)

    
    return (
        <div>
            <MakeCard 
                heading='Load Demo Data' 
                content='Feels like you made too many mistakes? No worries,
                         clear everything with just one click, but be careful
                          if there are no backups.' 
                btn = 'Load Demo Data ! '
                value = {getDemoData}
                action = 'getDemoData'
                />
            <MakeCard 
                heading='Reset EveryThing' 
                content='Unclear on what to do with a fresh blank page?
                         Load some demo data to see how a resume should 
                         look and you can start editing from there.' 
                btn = 'Reset EveryThing ! '
                value = {shouldReset}
                action = 'shouldReset'
                />

            <MakeCard 
                heading='Share Your Resume' 
                content='The link below will be accessible publicly if 
                         you choose to share it, and viewers would see 
                         the latest version of your resume at any time.' 
                btn = 'Share Me ! '
                />  
        </div>
    )
}

export default Acton


