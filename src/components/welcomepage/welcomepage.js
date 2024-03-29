import React, {useState, useEffect} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { UseStyles } from '../welcomepage/welcomepagedata';

import {motion} from 'framer-motion';

import wocimage from '../../images/woc.png';

import Parallax from '../../hooks/parallax';

export default function WelcomePage() {

    const {root, welcomeTitle, welcomeSection, welcomeSectionMobile, wocimagestyleMobile, welcomeTitleMobile, welcomeSubTitle, welcomeSubTitleMobile, wocimagestyle, buttonStyle, buttonStyleMobile} = UseStyles();

    const [imageLoading, setImageLoading] = useState(true);
    const [pulsing, setPulsing] = useState(true);

    const imageLoaded = () => {
        setImageLoading(false);
        setTimeout(() => setPulsing(false), 600);
    };

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
      });
    
    const { mobileView } = state;
    
    useEffect(() => {
        const setResponsiveness = () => {
        return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
    
        window.addEventListener("resize", () => setResponsiveness());
    
        return () => {
        window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const displayDesktop = () => {
        return (
            <>
                <div className={`${pulsing ? "pulse" : ""} welcomeSection`}>
                    <h1 className={welcomeTitle}>Welcome to</h1>
                    <motion.img 
                        src={wocimage} 
                        initial={{opacity: 0}} 
                        animate={{opacity: imageLoading ? 0 : 1}} 
                        transition={{opacity: {delay: 0.5, duration: 0.4}}} 
                        onLoad={imageLoaded}
                        className={wocimagestyle} 
                        alt="WOC main imgs"/>
                    <span className={welcomeSubTitle}>An initiative of GDSC NSEC</span>
                    <br/>
                    <Stack className={buttonStyle} spacing={2} direction="row">
                        <Button style={{borderRadius: '50px'}} variant="outlined"><a style={{textDecoration: "none", color: "#1976d2"}} href="#about">Get Started</a></Button>
                        <Button style={{borderRadius: '50px'}} variant="outlined"><a style={{textDecoration: "none", color: "#1976d2"}} href="#apply">Apply</a></Button>
                    </Stack>
                </div>
         
            </>
        );
      };

    const displayMobile = () => {

    return (
        <>
                <div className={`${pulsing ? "pulse" : ""} welcomeSectionMobile`}>
                    <h1 className={welcomeTitleMobile}>Welcome to</h1>
                    <motion.img 
                        initial={{opacity: 0}} 
                        animate={{opacity: imageLoading ? 0 : 1}} 
                        transition={{opacity: {delay: 0.5, duration: 0.4}}} 
                        onLoad={imageLoaded}
                        src={wocimage} 
                        className={wocimagestyleMobile} 
                        alt="WOC main imgs"/>
                    <span className={welcomeSubTitleMobile}>An initiative of GDSC NSEC</span>
                    <br/>
                    <Stack className={buttonStyleMobile} spacing={2} direction="row">
                        <Button style={{borderRadius: '50px'}} variant="outlined"><a style={{textDecoration: "none", color: "#1976d2"}} href="#about">Get Started</a></Button>
                        <Button style={{borderRadius: '50px'}} variant="outlined"><a style={{textDecoration: "none", color: "#1976d2"}} href="#apply">Apply</a></Button>
                    </Stack>
                </div>
            </>
    );
    };


    return (
        <div className={root}>
            <Parallax offset={100}>
                {mobileView ? displayMobile() : displayDesktop()}  
            </Parallax>
        </div>
    )
}