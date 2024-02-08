import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Issue, RootState } from "../utils/types";
import { useEffect, useState } from "react";
import { updateIssues } from "../store/dataSlice";
import { IssueColumn } from "./IssueColumn";

export const IssueBlocks = () => {
  const dispatch = useDispatch();
  const { issues } = useSelector((state: RootState) => state.data);
  const [openedIssues, setOpenedIssues] = useState<Issue[]>([]);
  const [closedIssues, setClosedIssues] = useState<Issue[]>([]);
  const [inProgressIssues, setInProgressIssues] = useState<Issue[]>([]);

  useEffect(() => {
    setOpenedIssues(issues.filter((issue) => issue.state === "open"));
    setClosedIssues(issues.filter((issue) => issue.state === "closed"));
    setInProgressIssues(issues.filter((issue) => issue.state === "inProgress"));
  }, [issues]);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    issue: Issue
  ) => {
    event.dataTransfer.setData("text/plain", JSON.stringify(issue));
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    targetState: string
  ) => {
    event.preventDefault();
    const issue = JSON.parse(event.dataTransfer.getData("text/plain"));

    if (targetState === "open") {
      setOpenedIssues((prevIssues) => [...prevIssues, issue]);
    } else if (targetState === "inProgress") {
      setInProgressIssues((prevIssues) => [...prevIssues, issue]);
    } else if (targetState === "closed") {
      setClosedIssues((prevIssues) => [...prevIssues, issue]);
    }

    const updatedIssues = issues.map((item) => {
      if (item.number === issue.number) {
        return { ...item, state: targetState };
      }
      return item;
    });

    dispatch(updateIssues(updatedIssues));
  };

  return (
    <>
      {issues.length > 0 && (
        <Container className="d-flex gap-3 p-0">
          <div
            className="d-flex flex-column gap-3 text-center"
            style={{ width: "33%", height: "78vh" }}
          >
            <h3>ToDo</h3>
            <IssueColumn
              issues={openedIssues}
              targetState="open"
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
            />
          </div>
          <div
            className="d-flex flex-column gap-3 text-center"
            style={{ width: "33%", height: "78vh" }}
          >
            <h3>In Progress</h3>
            <IssueColumn
              issues={inProgressIssues}
              targetState="inProgress"
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
            />
          </div>
          <div
            className="d-flex flex-column gap-3 text-center"
            style={{ width: "33%", height: "78vh" }}
          >
            <h3>Done</h3>
            <IssueColumn
              issues={closedIssues}
              targetState="closed"
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
            />
          </div>
        </Container>
      )}
    </>
  );
};
