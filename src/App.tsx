import "./App.css";
import { Container } from "react-bootstrap";
import { Input } from "./components/Input";
import { InfoLine } from "./components/InfoLine";
import { IssueBlocks } from "./components/IssueBlocks";

function App() {
  return (
    <Container className="d-flex flex-column p-3 gap-3">
      {/* <h4>https://github.com/facebook/react</h4> */}
      <Input />
      <InfoLine />
      <IssueBlocks />
    </Container>
  );
}

export default App;
