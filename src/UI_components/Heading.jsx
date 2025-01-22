import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: ${({ $align }) => $align || 'center'};  
  font-family: var(--font-primary); 
`;

const Subheading = styled.div`  
  color: ${({ $subheadingcolor }) => $subheadingcolor || 'var(--blue-color)'};
  margin-bottom: 8px;
  font-size: var(--fs-14);
  font-weight: var(--fw-600);
  line-height: 1.5;
  letter-spacing: -0.2px; 

  @media(max-width: 991px) {
    font-size: var(--fs-12);
  }
`;

const MainHeading = styled.h1` 
  color: ${({ $mainheadingcolor }) => $mainheadingcolor || 'var(--blue-color)'};
  font-size: var(--fs-32);
  font-weight: var(--fw-700);
  line-height: 1.3;
  letter-spacing: -0.015em; 
  margin: 0;

  @media(max-width: 991px) {
    font-size: var(--fs-24);
  } 
`;

const Heading = ({
    subheading,
    mainHeading,
    subheadingcolor,
    mainheadingcolor,
    className,
    align = 'center',
}) => {
    return (
        <HeaderContainer $align={align} className={className}>
            {subheading && (
                <Subheading
                    $subheadingcolor={subheadingcolor}>
                    {subheading}
                </Subheading>
            )}
            {mainHeading && (
                <MainHeading
                    $mainheadingcolor={mainheadingcolor}
                    dangerouslySetInnerHTML={{ __html: mainHeading }}
                />
            )}
        </HeaderContainer>

    );
};

export default Heading;
