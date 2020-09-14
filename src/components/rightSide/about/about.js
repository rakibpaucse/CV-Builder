import React from 'react'
import MakeCard from '../../util/card'


const About = () => {
    return (
        <div>
            <MakeCard 
                heading='Dont know Who I am ?' 
                content=' I am lazy programmer. I love to think like a programmer.
                            I love my PC. Lets know Each other . Just mail Me or DM me
                            on Facebook' 
                btn = 'Know ME ! '
                value = 'https://www.facebook.com/rakib.nazrulislam/'
                />

                <MakeCard 
                heading='Bug? Feature Request?' 
                content= " Something halting your progress from making a resume ? Found a pesky bug that just won't quit ? Talk about it on the GitHub Issues section using the actions below."
                btn = 'Raise An Issue ! '
                value = 'https://github.com/rakibpaucse/CV-Builder/issues'
                />

                <MakeCard 
                heading='Source Code' 
                content= "Want to run the project from its source? Are you a developer willing to contribute to the open-source development of this project? Click the button below."
                btn = 'Get Source Code ! '
                value = 'https://github.com/rakibpaucse/CV-Builder'
                />
            
        </div>
    )
}

export default About




