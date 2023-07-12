import React from "react";
import styles from "./IssueDetail.module.scss";
import { ISSUE } from "../../types/issue.type";
import { dateTransformer } from "../../utils/dateTransformer";
import ReactMarkdown from "react-markdown";
import "../../styles/markdown.scss";

type IssueDetailProps = {
  item: ISSUE;
};

const IssueDetail = ({ item }: IssueDetailProps) => {
  return (
    <div className={styles.detail}>
      <div className={styles.title}>
        <h3>
          <span className={styles.badge}>{item.state}</span>{" "}
          <span>{item.title}</span>{" "}
          <span className={styles.hash}>#{item.number}</span>
        </h3>
      </div>
      <div className={styles.user}>
        <img src={item.user.avatar_url} alt={`${item.user.login} 이미지`} />
        <p>
          <strong>{item.user.login}</strong> opened this issue{" "}
          <span>{dateTransformer(item.created_at)}</span> ·{" "}
          <span>{item.comments} comments</span>
        </p>
      </div>
      <div className={`${styles.content} markdown-body`}>
        <ReactMarkdown>{item.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default React.memo(IssueDetail);
