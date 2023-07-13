import { useLocation } from 'react-router-dom';
import { useIssue } from '@/hooks';
import { styled } from 'styled-components';
import { Title } from '@/components';

const getIssueNumber = (pathname: string) => +(pathname.split('/').at(-1) ?? -1);

const IssueDetail = () => {
  const { pathname } = useLocation();
  const issue_number = getIssueNumber(pathname);

  // 정상적인 issue_number가 아니라면, 에러 UI 표시. 깃허브에서는 그냥 목록페이지로 리다이렉트하고, 검색결과가 없다고 나온다.

  const { issue } = useIssue(issue_number);

  // console.log(이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시)
  console.log(issue);
  return (
    <SLayout>
      <SContainer>
        <SInfoContainer>
          <span>#{issue?.number}</span>
          <Title order={4} display="inline" p="0 10px">
            {issue?.title}
          </Title>
          <SCreateInfo>
            <SAvatar src={issue?.user?.avatar_url} alt={issue?.user?.login} />
            <span>작성자: {issue?.user?.login}</span>
            <span>작성일: {new Date(issue?.created_at || '').toLocaleString('ko-KR')}</span>
          </SCreateInfo>
        </SInfoContainer>

        <SComment>코멘트: {issue?.comments}</SComment>
      </SContainer>
      <main dangerouslySetInnerHTML={issue?.markup} />
    </SLayout>
  );
};

const SLayout = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const SComment = styled.div`
  flex-shrink: 0;
`;

export default IssueDetail;
