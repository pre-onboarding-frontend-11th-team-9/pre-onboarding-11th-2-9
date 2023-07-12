import React from "react";
import { ISSUE } from "../../types/issue.type";
import styles from "./IssueItem.module.scss";
import { Link } from "react-router-dom";
import CommentIcon from "../icon/CommentIcon";
import IssueIcon from "../icon/IssueIcon";
import { dateTransformer } from "../../utils/dateTransformer";

type IssueItemProps = {
  item: ISSUE;
};

const IssueItem = ({ item }: IssueItemProps) => {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <IssueIcon className={styles.icon} />
        <div>
          <h3 className={styles.title}>
            <Link to={`${item?.number}`}>{item?.title}</Link>
          </h3>
          <p className={styles.info}>
            #{item?.number} opened {dateTransformer(item?.created_at)} by{" "}
            {item?.user?.login}
          </p>
        </div>
      </div>
      <div className={styles.comment}>
        <CommentIcon /> {item?.comments}
      </div>
    </li>
  );
};

export default React.memo(IssueItem);
