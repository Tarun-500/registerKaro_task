import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: ${({ align }) => align || 'center'};  
  font-family: var(--font-primary); 
`;


const Subheading = styled.div`  
color: ${({ subHeadingColor }) => subHeadingColor || 'var(--blue-color)'};
margin-bottom: 8px;
font-size: var(--fs-14);
font-weight: var(--fw-600);
line-height: 1.5;
letter-spacing: -0.2px; 

@media(max-width: 991px){
font-size: var(--fs-12);
}

`;

const MainHeading = styled.h1` 
color: ${({ mainHeadingColor }) => mainHeadingColor || 'var(--blue-color)'};
font-size: var(--fs-32);
font-weight:  var(--fw-700);
line-height: 1.3;
letter-spacing: -0.015em; 

@media(max-width: 991px){
font-size: var(--fs-24);
} 

`;

const Heading = ({
    subheading,
    mainHeading,
    subHeadingColor,
    mainHeadingColor,
    className,
    align = 'center',
}) => {
    return (
        <HeaderContainer align={align} className={className}>
            {subheading && <Subheading subHeadingColor={subHeadingColor}>{subheading}</Subheading>}
            {mainHeading && <MainHeading mainHeadingColor={mainHeadingColor}>{mainHeading}</MainHeading>}
        </HeaderContainer>
    );
};

export default Heading;
