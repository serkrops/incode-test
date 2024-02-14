import { Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { getOwnerAndRepo } from "../utils/helpers";
import { useDispatch } from "react-redux";
import { fetchIssues, fetchRepo } from "../store/thunks";
import { UnknownAction } from "@reduxjs/toolkit";
import { addUrl } from "../store/dataSlice";

export const Input = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue === "") {
      return alert("Please enter a repo url");
    }
    const ownerAndRepo = getOwnerAndRepo(inputValue);
    const unknownAction = fetchRepo(ownerAndRepo) as unknown as UnknownAction;

    dispatch(unknownAction);
    dispatch(fetchIssues(ownerAndRepo) as unknown as UnknownAction);
    dispatch(addUrl(inputValue) as unknown as UnknownAction);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="d-flex gap-2">
        <Form.Control
          id="input-field"
          placeholder="Enter repo url"
          aria-label="Repo url"
          value={inputValue}
          onChange={handleChange}
        />
        <Button variant="outline-primary" type="submit">
          Find Issues
        </Button>
      </InputGroup>
    </Form>
  );
};
