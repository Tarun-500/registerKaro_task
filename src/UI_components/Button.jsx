import styled from "styled-components";

// Styled Button Component
const StyledButton = styled.button`
  background-color: ${(props) =>
    props.color || "var(--primary-color)"};  
  color: ${(props) =>
    props.textColor || "var(--white-color)"}; 
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
`;


const Button = ({
  text,
  color,
  textColor,
  icon = null,
  onClick,
  size = "medium",
  disabled = false,
  className,
}) => {
  return (
    <StyledButton
      color={color}
      textColor={textColor}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}
      {icon && <span className="button-icon">{icon}</span>}

    </StyledButton>
  );
};

export default Button;
