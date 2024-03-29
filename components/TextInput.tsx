import React from "react";

const styles = {
  inputContainer: `relative`,
  inputLabel: "flex flex-col w-full",
  inputText:
    "border-2 outline-none rounded-md w-full p-1 outline-none transition hover:border-gray-300 focus:border-gray-300 mb-3",
  inputTextarea:
    "max-w-full min-w-full w-full min-h-[150px] max-w-[350px] h-full",
  inputLabelP: "text-lg mb-2",

  errorBox:
    "absolute bottom-[100%] mb-[-2rem] right-0 bg-black text-white rounded-md p-2 transition",
};

const TextInput = ({
  state,
  setState,
  validationCheck,
  name,
  type,
}: TextInput) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>
        <p className={styles.inputLabelP}>{name}</p>
      </label>

      {type == "textarea" ? (
        <textarea
          id={name}
          name={name}
          className={`${styles.inputText} ${styles.inputTextarea} ${
            state.errorState == "hide" && validationCheck().err
              ? "border-red-400 "
              : "border-black"
          } `}
          value={state.value}
          onBlur={() =>
            setState({ ...state, errorState: "hide", firstFocus: false })
          }
          onFocus={() => setState({ ...state, errorState: "show" })}
          onChange={(e) => setState({ ...state, value: e.target.value })}
        />
      ) : (
        <input
          type="text"
          id={name}
          name={name}
          className={`${styles.inputText} ${
            state.errorState == "hide" && validationCheck().err
              ? "border-red-400 "
              : "border-black"
          } `}
          value={state.value}
          onBlur={() =>
            setState({ ...state, errorState: "hide", firstFocus: false })
          }
          onFocus={() => setState({ ...state, errorState: "show" })}
          onChange={(e) => setState({ ...state, value: e.target.value })}
        />
      )}

      <p
        className={`${styles.errorBox} ${
          state.errorState == "show" &&
          !state.firstFocus &&
          validationCheck().err
            ? "opacity-[1]"
            : "opacity-[0]"
        }`}
      >
        🚩
        {validationCheck().message}
      </p>
    </div>
  );
};

export default TextInput;
