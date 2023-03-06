import { PrivacyContext } from "@/context/privacyContext";
import React, { useContext } from "react";
import { MdOutlinePolicy } from "react-icons/md";
import { PrivacyProps } from "./Gdpr";

type Checkbox = {
  name?: string;
  text: string;
  onChange?: any;
  checked?: boolean;
  disabled?: boolean;
  privacy?: boolean;
};

export function Checkbox({
  name,
  text,
  onChange,
  checked,
  disabled,
  privacy,
}: Checkbox) {
  const { showPrivacy, setShowPrivacy }: PrivacyProps =
    useContext(PrivacyContext);
  return (
    <div className="cb-custom-cls">
      <label className="flex flex-wrap">
        <input
          name={name}
          id={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled ? disabled : false}
        />
        <div />
        <p className="flex flex-wrap">{text}</p>
        {privacy && (
          <button
            className="flex items-center gap-1 w-full mt-5 md:mt-0"
            onClick={() => setShowPrivacy(true)}
          >
            <MdOutlinePolicy />
            Privacy policy*
          </button>
        )}
      </label>
    </div>
  );
}
