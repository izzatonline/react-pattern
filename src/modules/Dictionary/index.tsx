import { createContext, useState } from "react";
import Header from "./Header";

export const InputContext = createContext({
  inputValue: "",
  setInputValue: (value: string) => {},
});

const Dictionary = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <InputContext.Provider value={value}>
      <div>
        <Header />
      </div>
    </InputContext.Provider>
  );
};

export default Dictionary;
