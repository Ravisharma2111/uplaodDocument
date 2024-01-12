import React from "react";

const sizeClasses = {
  txtInterSemiBold12: "font-inter font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium16Bluegray700: "font-inter font-medium",
  txtInterBold24: "font-bold font-inter",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
