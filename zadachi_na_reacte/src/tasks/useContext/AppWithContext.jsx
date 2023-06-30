import { createContext } from "react";

const Context = createContext();
const MyProvider = ({ children }) => {
  // make api fetch
  return <Context.Provider>{children}</Context.Provider>;
};

export default function AppWithContext() {
  const text = "L:WNFLKWRKWNLWNEF";

  return (
    <MyProvider>
      <Text4 />
    </MyProvider>
  );
}

const Text4 = () => {
  return <Text3 />;
};

const Text3 = () => {
  return <Text2 />;
};

const Text2 = () => {
  return <Text1 />;
};

const Text1 = () => {
  return <Text />;
};

const Text = () => {
  return null;
};
