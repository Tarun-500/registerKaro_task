import styled from 'styled-components';

const DotsGrid = () => {
    const rows = 8;  
    const columns = 8;  
  
    return (
      <DotsGridContainer>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <DotRow key={rowIndex}>
            {Array.from({ length: columns }).map((_, index) => (
              <Dot key={index}></Dot>
            ))}
          </DotRow>
        ))}
      </DotsGridContainer>
    );
  };

const DotsGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  justify-content:end;
  margin-left:auto;
  max-width:175px;
  position: absolute;
    bottom: 20px;
    right: 20px;
`;

const DotRow = styled.div`
  display: flex;
 align-items:center;
 justify-content:end;
  gap: 10px; 
`;

const Dot = styled.span`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--primary-color);
`;

export default DotsGrid;
