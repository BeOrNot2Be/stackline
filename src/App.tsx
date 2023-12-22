import { Navigator } from "./components/Navigator";
import { StacklineFooter } from "./components/Footer";
import { StacklineNavbar } from "./components/Navbar";

const App = () => {
  return (
    <>
      <StacklineNavbar />
      <Navigator />
      <StacklineFooter />
    </>
  );
};

export default App;
