import React, {
  Dispatch,
  SetStateAction,
  useState,
  createContext,
} from "react";

export type PrivacyProps = {
  showPrivacy: boolean;
  setShowPrivacy: Dispatch<SetStateAction<boolean>>;
};

export const PrivacyContext: any = createContext([]);

export default ({ children }: any) => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <PrivacyContext.Provider value={{ showPrivacy, setShowPrivacy }}>
      {children}
    </PrivacyContext.Provider>
  );
};
