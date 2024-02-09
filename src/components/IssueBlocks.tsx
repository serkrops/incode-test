import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Issue, RootState } from "../utils/types";
import { updateIssues } from "../store/dataSlice";
import { IssueColumn } from "./IssueColumn";

export const IssueBlocks = () => {
  const dispatch = useDispatch();
  const { issues, url } = useSelector((state: RootState) => state.data);
  const { open, close, progress } = issues;

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
    targetStatus: string
  ) => {
    event.preventDefault();
    const issue = JSON.parse(event.dataTransfer.getData("text/plain"));
    const updatedIssues = {
      open: open.filter((item: Issue) => item.number !== issue.number),
      close: close.filter((item: Issue) => item.number !== issue.number),
      progress: progress.filter((item: Issue) => item.number !== issue.number),
    };

    if (targetStatus === "open") {
      updatedIssues.open.push(issue);
    } else if (targetStatus === "close") {
      updatedIssues.close.push(issue);
    } else if (targetStatus === "progress") {
      updatedIssues.progress.push(issue);
    }

    dispatch(updateIssues(updatedIssues));
    sessionStorage.setItem(url, JSON.stringify(updatedIssues));
  };

  // console.log(JSON.stringify(open[0]));

  return (
    <>
      {url.length > 0 && (
        <Container className="d-flex gap-3 p-0">
          <IssueColumn
            title="ToDo"
            issues={open}
            targetStatus="open"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            handleDragStart={handleDragStart}
          />
          <IssueColumn
            title="In Progress"
            issues={progress}
            targetStatus="progress"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            handleDragStart={handleDragStart}
          />
          <IssueColumn
            title="Done"
            issues={close}
            targetStatus="close"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            handleDragStart={handleDragStart}
          />
        </Container>
      )}
    </>
  );
};
