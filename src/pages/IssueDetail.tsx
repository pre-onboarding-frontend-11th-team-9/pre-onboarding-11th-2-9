import { styled } from 'styled-components';

import { Error } from '../pages';
import { Title, Loading } from '../components';
import { useIssue } from '../context/issue';

const IssueDetail = () => {
  const { issue, isLoading, error } = useIssue();

  if (error) return <Error />;

  return (
    <SLayout>
      <SContainer>
        <SInfoContainer>
          <span>#{issue?.number}</span>
          <Title order={4} display="inline" p="0 10px">
            {issue?.title}
          </Title>
          <SCreateInfo>
            <SAvatar src={issue.user?.avatar_url} alt={issue.user?.login} />
            <span>작성자: {issue.user?.login}</span>
            <span>작성일: {new Date(issue?.created_at || '').toLocaleString('ko-KR')}</span>
          </SCreateInfo>
        </SInfoContainer>
        <SComment>
          <img src="/images/commentIcon.svg" alt="댓글 아이콘" /> {issue?.comments}
        </SComment>
      </SContainer>
      <SMarkup dangerouslySetInnerHTML={issue?.markup} />
      {isLoading && <Loading />}
    </SLayout>
  );
};

const SLayout = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid ${props => props.theme.colors.gray[3]};
  border-radius: 10px;
  background-color: ${props => props.theme.colors.white[0]};
`;

const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 3px dotted ${props => props.theme.colors.gray[3]};
`;

const SInfoContainer = styled.div`
  line-height: 1.5;
`;

const SCreateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const SComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-shrink: 0;
`;

const SMarkup = styled.main`
  padding: 40px 0;
  min-height: 400px;
  blockquote,
  details,
  dl,
  ol,
  p,
  pre,
  table,
  ul,
  p {
    margin-bottom: 16px;
  }
  img {
    max-width: 100%;
  }
  code {
    background-color: ${props => props.theme.colors.gray[2]};
    border-radius: 6px;
    padding: 2px 4px;
  }
  pre {
    padding: 10px;
    background-color: ${props => props.theme.colors.gray[2]};
    overflow-x: auto;
  }
`;

export default IssueDetail;
