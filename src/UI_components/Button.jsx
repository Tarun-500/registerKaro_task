import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background-color: ${({ $color }) => $color || "var(--primary-color)"};
  color: ${({ $textcolor }) => $textcolor || "var(--white-color)"};
  padding: ${({ $size }) =>
    $size === "small"
      ? "8px 12px"
      : $size === "large"
        ? "16px 24px"
        : "12px 18px"};
  font-size: ${({ $size }) =>
    $size === "small" ? "14px" : $size === "large" ? "18px" : "16px"};
  border: none;
  border-radius: 8px;
  display: inline-flex;
  font-weight: ${({ $fw }) => $fw || "400"};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 8px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: var(--text-color-light);
    cursor: not-allowed;
  }

  .prev-icon {
    color: var(--brown-color-1);
  }

  @media (max-width: 576px) {
    font-size: ${({ $size }) =>
    $size === "small" ? "12px" : $size === "large" ? "16px" : "14px"};
  }
`;

const Button = ({
  text,
  color,
  textcolor,
  icon,
  onClick,
  size = "medium",
  disabled = false,
  fw = 400,
  previcon,
  className,
  arialabel,
}) => {
  return (
    <StyledButton
      type="button"
      $color={color}
      $textcolor={textcolor}
      $size={size}
      $fw={fw}
      onClick={onClick}
      disabled={disabled}
      className={className}
      aria-label={arialabel || undefined}
    >
      {previcon && <span className="prev-icon">{previcon}</span>}
      {text}
      {icon && <span className="button-icon">{icon}</span>}
    </StyledButton>
  );
};


Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textcolor: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  fw: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  previcon: PropTypes.node,
  className: PropTypes.string,
  arialabel: PropTypes.string,
};

export default Button;
