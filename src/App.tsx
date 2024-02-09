import { Container } from "react-bootstrap";
import { Input } from "./components/Input";
import { InfoLine } from "./components/InfoLine";
import { IssueBlocks } from "./components/IssueBlocks";

function App() {
  return (
    <Container className="app-container">
      <Input />
      <InfoLine />
      <IssueBlocks />
    </Container>
  );
}

export default App;
