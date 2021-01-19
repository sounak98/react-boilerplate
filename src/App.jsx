import { Grommet } from "grommet";
import Router from "./app/Router";
import theme from "./app/theme";

const App = () => {
  return (
    <Grommet theme={theme}>
      <Router />
    </Grommet>
  );
};

export default App;
