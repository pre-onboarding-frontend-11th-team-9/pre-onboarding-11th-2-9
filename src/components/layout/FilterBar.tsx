import { ChangeEvent } from "react";
import { useIssueDispatch, useIssueState } from "../../context/IssueContext";
import { SORT_TYPE } from "../../utils/enums";
import styles from "./FilterBar.module.scss";
import IssueIcon from "../icon/IssueIcon";

const FilterBar = () => {
  const { total } = useIssueState();
  const dispatch = useIssueDispatch();

  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "UPDATE_SORT", data: e.target.value });
  };

  return (
    <div className={styles.filter}>
      <div className={styles.total}>
        <IssueIcon />
        <span>TOTAL {total}</span>
      </div>
      <select onChange={handleChangeSort} className={styles.sort}>
        <option value={SORT_TYPE.COMMENT_DESC}>Most Commented</option>
        <option value={SORT_TYPE.COMMENT_ASC}>Least Commented</option>
        <option value={SORT_TYPE.CREATED_DESC}>Newest</option>
        <option value={SORT_TYPE.CREATED_ASC}>Oldest</option>
      </select>
    </div>
  );
};

export default FilterBar;
