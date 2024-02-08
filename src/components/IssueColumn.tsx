import { Card, Container } from "react-bootstrap";
import { IssueCard } from "./IssueCard";
import React from "react";
import { Issue } from "../utils/types";

type Props = {
  issues: Issue[];
  targetState: string;
  handleDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    issue: Issue
  ) => void;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (
    event: React.DragEvent<HTMLDivElement>,
    targetState: string
  ) => void;
};

export const IssueColumn: React.FC<Props> = ({
  issues,
  targetState,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  return (
    <Container
      className="d-flex flex-column gap-3 p-3 border"
      style={{ overflowY: "auto", height: "78vh" }}
      onDragOver={handleDragOver}
      onDrop={(event: React.DragEvent<HTMLDivElement>) =>
        handleDrop(event, targetState)
      }
    >
      {issues.map((issue, index) => (
        <Card
          key={issue.number}
          className="border"
          draggable
          onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
            handleDragStart(event, issue)
          }
          style={{ cursor: "grab" }}
        >
          <IssueCard issue={issue} index={index + 1} />
        </Card>
      ))}
    </Container>
  );
};
