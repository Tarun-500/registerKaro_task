import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  margin: 0 0 20px 0;

  @media(max-width: 991px) {
    font-size: var(--fs-24);
  } 
`;

const Heading = ({
  subheading = '',
  mainHeading = '',
  subheadingcolor = 'var(--blue-color)',
  mainheadingcolor = 'var(--blue-color)',
  className = '',
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

Heading.propTypes = {
  subheading: PropTypes.string,
  mainHeading: PropTypes.string,
  subheadingcolor: PropTypes.string,
  mainheadingcolor: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Heading;
