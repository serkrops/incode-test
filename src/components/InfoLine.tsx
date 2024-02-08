import { Container } from "react-bootstrap";
import starSvg from "../assets/star-solid.svg";
import { useSelector } from "react-redux";
import { RootState } from "../utils/types";
import { ucString } from "../utils/helpers";

export const InfoLine = () => {
  const { name, owner, html_url, stargazers_count } = useSelector(
    (state: RootState) => state.data.repo
  );

  return (
    <>
      {name && (
        <Container className="d-flex gap-3 p-0">
          <a href={html_url} target="_blank" style={{ textDecoration: "none" }}>
            <h3>{ucString(owner.login) + " > " + ucString(name)}</h3>
          </a>
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
      )}
    </>
  );
};
