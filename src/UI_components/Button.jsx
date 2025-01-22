import styled from "styled-components";
const StyledButton = styled.button`
  background-color: ${(props) =>
    props.color || "var(--primary-color)"};  
  color: ${(props) =>
    props.textcolor || "var(--white-color)"}; 
  padding: ${(props) =>
    props.size === "small"
      ? "8px 12px"
      : props.size === "large"
        ? "16px 24px"
        : "12px 18px"};
  font-size: ${(props) =>
    props.size === "small" ? "14px" : props.size === "large" ? "18px" : "16px"};
  border: none;
  border-radius: 8px;
  display: inline-flex;
  font-weight: ${(props) =>
    props.fw || "400"}; 
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 8px;  
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;  
  }

  &:disabled {
    background-color: var(--text-color-light); 
    cursor: not-allowed;
  }

  .prev-icon{
  color:var(--brown-color-1)
  }
`;


const Button = ({
  text,
  color,
  textcolor,
  icon = null,
  onClick,
  size = "medium",
  disabled = false,
  fw = 400,
  previcon,
  className,
  arialabel
}) => {
  return (
    <StyledButton
      color={color}
      textcolor={textcolor}
      size={size}
      fw={fw}
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...(arialabel && { 'aria-label': arialabel })}
    >
      {previcon && <span className="prev-icon">{previcon}</span>}
      {text}
      {icon && <span className="button-icon">{icon}</span>}

    </StyledButton>
  );
};

export default Button;
