import React from "react";

export default function Button({
  hovered,
  disabled,
  onClick,
  noShadow,
  variant,
  label,
  color,
  size,
  startIcon,
  endIcon,
  block,
  ...props
}) {
  const className = `btn ${noShadow && "no-shadow"} btn-${variant} 
  ${hovered && "hovered"} ${color} ${size} ${block && "btn-block"}`;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}>
      {startIcon && <i className="material-icons start-icon">{startIcon}</i>}
      {label || "Button"}
      {!startIcon && endIcon && (
        <i className="material-icons end-icon">{endIcon}</i>
      )}
    </button>
  );
}
