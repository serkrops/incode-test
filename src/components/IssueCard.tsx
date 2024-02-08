import { Card } from "react-bootstrap";
import { Issue } from "../utils/types";
import { preparedDate } from "../utils/helpers";

type Props = {
  issue: Issue;
  index: number;
};

export const IssueCard: React.FC<Props> = ({ issue, index }) => (
    <Card.Body>
      <Card.Title>{index + ". " + issue.title}</Card.Title>
      <Card.Text>
        <p>
          {"#" +
            issue.number +
            " opened " +
            preparedDate(issue.created_at) +
            " days ago by"}
        </p>
        <p>
          <a href={issue.user.html_url} style={{ textDecoration: "none" }}>
            {issue.user.login}
          </a>
          {" | " + " Comments: " + issue.comments}
        </p>
      </Card.Text>
    </Card.Body>
);
