import { Button, Form, InputGroup, Stack } from "react-bootstrap";

export const Input = () => {
  return (
    <InputGroup className="d-flex gap-2">
      <Form.Control
        placeholder="Enter repo url"
        aria-label="Recipient's username"
      />
      <Button variant="outline-primary">Button</Button>
    </InputGroup>
  );
};
