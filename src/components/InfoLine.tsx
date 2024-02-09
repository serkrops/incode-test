import { Container } from "react-bootstrap";
import starSvg from "../assets/star-solid.svg";
import { useSelector } from "react-redux";
import { RootState } from "../utils/types";
import { ucString } from "../utils/helpers";

export const InfoLine = () => {
  const { name, owner, html_url, stargazers_count } = useSelector(
    (state: RootState) => state.data.repo
  );

  if (!name) {
    return null;
  }

  return (
    <Container className="d-flex gap-3 p-0">
      <h3>
        <a href={owner.html_url} target="_blank">
          {ucString(owner.login)}
        </a>
        {" > "}
        <a href={html_url} target="_blank">
          {ucString(name)}
        </a>
      </h3>
      <div className="d-flex justify-content-center align-items-center gap-2">
        <h3>{stargazers_count}</h3>
        <img
          src={starSvg}
          alt="star"
          style={{ width: "20px", height: "20px" }}
        />
        <h3 className="m-0">stars</h3>
      </div>
    </Container>
  );
};
