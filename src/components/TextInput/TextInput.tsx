import React, { FC } from "react";
import { WrappedFieldProps } from "redux-form";

export interface CustomProps {
  uselessprop: string;
}

const TextInput: FC<WrappedFieldProps> = ({
  input: { name, value, onChange, onBlur, onFocus },
  meta: { error },
  ...props
}) => {
  // console.log(props.uselessprop);
  // console.log("onchange", onChange);
  // console.log("onblur", onBlur);
  // console.log("onfocus", onFocus);
  return (
    <div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      ></input>
    </div>
  );
};

export default TextInput;
