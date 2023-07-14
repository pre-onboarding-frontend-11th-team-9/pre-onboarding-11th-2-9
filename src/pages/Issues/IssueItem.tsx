import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import { Title } from '../../components';
import type { Issue } from '../../types';

const IssueItem = ({ issue: { number, title, created_at, user, comments } }: IssueItemProps) => {
  return (
    <SLayout>
      <SLink to={`./${number}`}>
        <SInfoContainer>
          <span>#{number}</span>
          <Title order={4} display="inline" p="0 10px">
            {title}
          </Title>
          <SCreateInfo>
            <span>작성자: {user.login}</span>
            <span>작성일: {new Date(created_at).toLocaleString('ko-KR')}</span>
          </SCreateInfo>
        </SInfoContainer>
        <SComment>
          <img src="/images/commentIcon.svg" alt="댓글 아이콘" /> {comments}
        </SComment>
      </SLink>
    </SLayout>
  );
};

const SLayout = styled.li`
  list-style: none;
  padding: 20px 20px;
  border: 1px solid ${props => props.theme.colors.gray[3]};
  border-radius: 10px;
  background: ${props => props.theme.colors.white[0]};
  transition: transform 0.1s linear;

  + li {
    margin-top: 10px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.gray[2]};
    transform: translate3d(-2px, -2px, 10px);
    border-color: ${props => props.theme.colors.gray[7]};
  }
`;

const SLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

const SInfoContainer = styled.div`
  line-height: 1.5;
`;

const SCreateInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const SComment = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  img {
    width: 14px;
  }
`;

type IssueItemProps = {
  issue: Issue;
};

export default IssueItem;
