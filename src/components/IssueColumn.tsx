import { Container } from "react-bootstrap";
import { Issue } from "../utils/types";
import { IssueCard } from "./IssueCard";

interface IssueColumnProps {
  title: string;
  issues: Issue[];
  targetStatus: string;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (
    event: React.DragEvent<HTMLDivElement>,
    targetStatus: string
  ) => void;
  handleDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    issue: Issue
  ) => void;
}

export const IssueColumn: React.FC<IssueColumnProps> = ({
  title,
  issues,
  targetStatus,
  onDragOver,
  onDrop,
  handleDragStart,
}) => {
  return (
    <div className="column">
      <h3>{title}</h3>
      <Container
        className="d-flex flex-column gap-3 p-3 border"
        style={{ overflowY: "auto", height: "78vh" }}
        onDragOver={onDragOver}
        onDrop={(event: React.DragEvent<HTMLDivElement>) =>
          onDrop(event, targetStatus)
        }
      >
        {issues.map((issue: Issue, index: number) => (
          <IssueCard
            key={issue.number}
            issue={issue}
            index={index}
            onDragStart={handleDragStart}
          />
        ))}
      </Container>
    </div>
  );
};
