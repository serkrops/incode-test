import "./App.css";
import { Container } from "react-bootstrap";
import { Input } from "./components/Input";
import { InfoLine } from "./components/InfoLine";

function App() {
  return (
    <Container className="d-flex flex-column p-3 gap-3">
      <Input />
      <InfoLine />
      <Container className="d-flex gap-3 p-0">
        <Container className="border"></Container>
        <Container className="border"></Container>
        <Container className="border"></Container>
      </Container>
    </Container>
  );
}

export default App;
