import { Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { getOwnerAndRepo } from "../utils/helpers";
import { useDispatch } from "react-redux";
import { fetchRepo } from "../store/thunks";
import { UnknownAction } from "@reduxjs/toolkit";

export const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue === "") {
      return alert("Please enter a repo url");
    }
    dispatch(
      fetchRepo(getOwnerAndRepo(inputValue)) as unknown as UnknownAction
    );
  };

  return (
    <InputGroup className="d-flex gap-2">
      <Form.Control
        placeholder="Enter repo url"
        aria-label="Recipient's username"
        value={inputValue}
        onChange={handleChange}
      />
      <Button variant="outline-primary" onClick={handleClick}>
        Button
      </Button>
    </InputGroup>
  );
};
