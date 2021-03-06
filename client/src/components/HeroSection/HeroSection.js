import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements/ButtonElements';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroSectionElements';

export const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} playsInline type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Safe and secure virtual banking</HeroH1>
                <HeroP>
                    Get started with an online account today for exclusive deals and promotions.
                    Receive $100 off towards your next credit card payment today!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
};