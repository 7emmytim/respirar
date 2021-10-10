import React from 'react'
import Objectives from '../components/Objectives'
import Overview from '../components/Overview'
import Team from '../components/Team'
import Vision from '../components/Vision'
import Movies from './Movies'

const About = () => {
    return (
        <>
            <Overview />
            <Vision />
            <Objectives />
            <Movies />
            <Team />
        </>
    )
}

export default About
