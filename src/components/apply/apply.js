import React, {useState, useEffect} from 'react'
import { UseStyles } from './applydata';
import { Stack, Button } from '@mui/material';

export default function Apply() {
    const {root, ApplyTitle, ApplyButton, ApplyContent, ApplyContentMobile, ApplyButtonMobile} = UseStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
      });
    
    const { mobileView, drawerOpen } = state;

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
            <div>
                <div className={ApplyTitle}>
                    <h1>Apply</h1>
                </div>
                <div className={ApplyContent}>
                    <p>Start your journey with Winter Of Code & be a part of our Open Source memory.</p>
                </div>
                <div className={ApplyButton}>
                    <Stack spacing={2} direction="row">
                        <Button style={{borderRadius: '50px'}} variant="outlined">Apply as Organization</Button>
                        <Button style={{borderRadius: '50px'}} variant="outlined">Apply as Mentor</Button>
                        <Button style={{borderRadius: '50px'}} variant="outlined">Apply as Student</Button>
                    </Stack>
                </div>
            </div>
        );
      };
    
    const displayMobile = () => {
        return (
            <div>
                <h1 className={ApplyTitle}>Apply</h1>
                <p className={ApplyContentMobile}>Start your journey with Winter Of Code & be a part of our Open Source memory.</p>
                <br/>
                <Stack className={ApplyButtonMobile} spacing={2} direction="row">
                    <Button style={{borderRadius: '50px'}} variant="outlined">Apply as Organization</Button>
                </Stack>
                <Stack className={ApplyButtonMobile} spacing={2} direction="row">
                    <Button style={{borderRadius: '50px'}} variant="outlined">Apply as Mentor</Button>
                </Stack>
                <Stack className={ApplyButtonMobile} spacing={2} direction="row">
                    <Button style={{borderRadius: '50px'}} variant="outlined">Apply as Student</Button>
                </Stack>
            </div>
        )     
    };

    return (
        <div className={root}>
            {mobileView ? displayMobile() : displayDesktop()}  
        </div>
    )
}
