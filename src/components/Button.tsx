import React from "react";

export default function Button({
  children,
  variant,
  onClick,
  type
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  let additionalClassNames = "";
  if (variant === "primary") {
    additionalClassNames = "bg-blue-500 hover:bg-blue-700 text-white";
  } else if (variant === "secondary") {
    additionalClassNames =
      "border border-blue-500 hover:bg-blue-500 hover:text-white bg-blue-500 bg-opacity-10 text-blue-500";
  } else if (variant === "text") {
    additionalClassNames = "text-blue-500 hover:text-blue-700 px-0 py-0";
  }

  return (
    <button
      type={type || "submit"}
      onClick={onClick}
      className={"rounded px-3 py-1 " + additionalClassNames}
    >
      {children}
    </button>
  );
}
