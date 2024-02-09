import { Card } from "react-bootstrap";
import { Issue } from "../utils/types";
import { preparedDate } from "../utils/helpers";

interface IssueCardProps {
  issue: Issue;
  index: number;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, issue: Issue) => void;
}

export const IssueCard: React.FC<IssueCardProps> = ({
  issue,
  index,
  onDragStart,
}) => {
  return (
    <Card
      key={issue.number}
      className="border"
      style={{ cursor: "grab" }}
      draggable
      onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
        onDragStart(event, issue)
      }
    >
      <Card.Body>
        <Card.Title>{index + ". " + issue.title}</Card.Title>
        <Card.Text>
          <span>
            {"#" +
              issue.number +
              " opened " +
              preparedDate(issue.created_at) +
              " days ago by "}
          </span>
          <span>
            <a href={issue.user.html_url} style={{ textDecoration: "none" }}>
              {issue.user.login}
            </a>
            {" | " + " Comments: " + issue.comments}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
