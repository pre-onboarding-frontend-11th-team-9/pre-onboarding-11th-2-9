import { Fragment, useCallback, useEffect, useState } from "react";
import { useIssueDispatch, useIssueState } from "../context/IssueContext";
import { API } from "../constants/api";
import apiClient from "../utils/apiClient";
import IssueItem from "../components/issue/IssueItem";
import { RESPONSE_TYPE } from "../types/issue.type";
import Banner from "../components/banner/Banner";
import FilterBar from "../components/layout/FilterBar";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Spinner from "../assets/img/spinner.gif";

const PER_PAGE = 25;

const IssueList = () => {
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const { issues, sort } = useIssueState();
  const dispatch = useIssueDispatch();
  const sentinelRef = useInfiniteScroll(() => {
    setPage((prevPage) => prevPage + 1);
  }, page);

  const getFetch = useCallback(async () => {
    setVisible(false);
    try {
      const { data } = await apiClient.get<RESPONSE_TYPE>(
        `/${API.ISSUES}+sort:${sort}&page=${page}&per_page=${PER_PAGE}`
      );
      if (data) {
        dispatch({
          type: "GET_ISSUES",
          data: {
            page: page,
            items: data.items,
            per_page: PER_PAGE,
          },
        });
        dispatch({ type: "GET_TOTAL", data: data.total_count });
        setVisible(true);
      }
    } catch (error) {}
  }, [dispatch, page, sort]);

  useEffect(() => {
    getFetch();
  }, [getFetch]);

  return (
    <>
      <FilterBar />
      <section>
        <ul>
          {issues &&
            issues.map((issue, index) => {
              const issueIndex = index + 1;
              if (issueIndex % 5 === 0) {
                return (
                  <Fragment key={index}>
                    <IssueItem item={issue} />
                    <Banner />
                  </Fragment>
                );
              }
              return <IssueItem item={issue} key={index} />;
            })}
        </ul>
        {!visible && <img src={Spinner} alt="로딩 스피너" />}
        {visible && <div ref={sentinelRef}></div>}
      </section>
    </>
  );
};

export default IssueList;
