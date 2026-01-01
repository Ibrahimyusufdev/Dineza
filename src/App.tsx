import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "@/app/";

const App = () => {
  return (
    <BrowserRouter>
      {/* All my routing declaration composable here */}
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
