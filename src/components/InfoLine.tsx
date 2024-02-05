import { Container } from "react-bootstrap";

export const InfoLine = () => {
  return (
    <Container className="d-flex gap-3 p-0">
      <h3>Facebook {"> "}</h3>
      <h3>React</h3>
      <div className="d-flex justify-content-center align-items-center gap-2">
        <p className="m-0">star</p>
        <p className="m-0">stars</p>
      </div>
    </Container>
  );
};
