import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../ButtonElements/ButtonElements';
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Img,
    ImgWrap
} from './InfoSectionElements';

export const InfoSection = ({ navigate, lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(navigate)
    }

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                        onClick={handleClick}
                                        smooth={true} 
                                        duration={500} 
                                        spy={true} 
                                        exact="true" 
                                        offset={-80} 
                                        primary={primary ? 1 : 0} 
                                        dark={dark ? 1 : 0} 
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
};