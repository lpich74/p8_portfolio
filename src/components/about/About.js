import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p>
                <span style={{color: info.baseColor}}>About {firstName}_{info.lastName.toLowerCase()} $ </span>
                <span style={{color: info.baseColor2}}>cat</span><br /><br />
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p>
                <span style={{color: info.baseColor}}>{firstName}_{info.lastName.toLowerCase()} $ </span>
                <span style={{color: info.baseColor2}}>cd skills/tools</span>
            </p>
            <p style={{color: info.baseColor2}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor2}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p>
                <span style={{color: info.baseColor}}>{firstName}_{info.lastName.toLowerCase()} $ </span>
                <span style={{color: info.baseColor2}}>cd hobbies/interests</span>
            </p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}