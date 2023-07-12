import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IssueDetailControl.module.scss";

const IssueDetailControl = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.controls}>
      <button type="button" onClick={() => navigate(-1)}>
        LIST
      </button>
    </div>
  );
};

export default IssueDetailControl;
