import Navbar from "./components/layout/Navbar";
import Tasks from "./components/layout/Tasks";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box color="#e4e4e4" pb="10">
      <Navbar />
      <Tasks />
    </Box>
  );
}

export default App;
