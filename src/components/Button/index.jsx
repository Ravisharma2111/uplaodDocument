import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded" };
const variants = {
  fill: {
    deep_orange_500: "bg-deep_orange-500 text-white-A700",
    gray_50: "bg-gray-50",
    white_A700: "bg-white-A700 text-gray-900",
  },
};
const sizes = { xs: "p-1.5", sm: "p-[9px]", md: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["deep_orange_500", "gray_50", "white_A700"]),
};

export { Button };
