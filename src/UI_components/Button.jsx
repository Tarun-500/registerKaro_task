import styled from "styled-components";

// Styled Button Component
const StyledButton = styled.button`
  background-color: ${(props) =>
    props.color || "var(--primary-color)"}; /* Default to root var */
  color: ${(props) =>
    props.textColor || "var(--white-color)"}; /* Text color from root var */
  padding: ${(props) =>
    props.size === "small"
      ? "8px 12px"
      : props.size === "large"
      ? "16px 24px"
      : "12px 18px"};
  font-size: ${(props) =>
    props.size === "small" ? "14px" : props.size === "large" ? "18px" : "16px"};
  border: none;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 8px; /* Gap between icon and text */
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8; /* Hover effect */
  }

  &:disabled {
    background-color: var(--text-color-light); /* Disabled color */
    cursor: not-allowed;
  }
`;

// Button Component
const Button = ({
  text,
  color, // Pass root variables like var(--blue-color)
  textColor, // Pass root variables for text color
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
      {icon && <span className="button-icon">{icon}</span>} {/* Render icon */}
      {text}
    </StyledButton>
  );
};

export default Button;
