import { useCallback, useEffect } from "react";
import apiClient from "../utils/apiClient";
import { API } from "../constants/api";
import { useParams } from "react-router-dom";
import { ISSUE } from "../types/issue.type";
import { useIssueDispatch, useIssueState } from "../context/IssueContext";
import IssueDetail from "../components/issue/IssueDetail";
import IssueDetailControl from "../components/issue/IssueDetailControl";

const IssueDetailPage = () => {
  const { id } = useParams();
  const { issue } = useIssueState();
  const dispatch = useIssueDispatch();

  const fetchDetail = useCallback(async () => {
    try {
      const { data } = await apiClient.get<ISSUE | null>(`${API.DETAIL}/${id}`);
      if (data) {
        dispatch({ type: "GET_ISSUE", data: data });
      }
    } catch (error) {}
  }, [dispatch, id]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  return (
    issue && (
      <>
        <section>
          <IssueDetail item={issue} />
        </section>
        <IssueDetailControl />
      </>
    )
  );
};

export default IssueDetailPage;
