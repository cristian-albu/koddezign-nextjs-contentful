import React from "react";

type Checkbox = {
  name?: string;
  text: string;
  onChange?: any;
  checked?: boolean;
  disabled?: boolean;
};

export function Checkbox({
  name,
  text,
  onChange,
  checked,
  disabled,
}: Checkbox) {
  return (
    <div className="cb-custom-cls">
      <label>
        <input
          name={name}
          id={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled ? disabled : false}
        />
        <div />
        <p>{text}</p>
      </label>
    </div>
  );
}
