import React from "react";

export const Input = ({
  label,
  value,
  type = "text",
  onChange,
  ...rest
}: {
  label: string;
  value: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} {...rest} />
    </div>
  );
};
