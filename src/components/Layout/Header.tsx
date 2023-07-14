import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import { Title } from '../';

const Header = () => {
  const { org, repo } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <SHeader>
      <SContainer>
        {pathname !== '/' && (
          <SButton onClick={() => navigate(-1)}>
            <img src="/images/arrowIcon.svg" alt="뒤로가기" />
          </SButton>
        )}
        <Title order={2}>{org && repo ? `${org} / ${repo}` : 'Git Hub'}</Title>
      </SContainer>
    </SHeader>
  );
};

const SHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.gray[3]};
  background-color: ${props => props.theme.colors.gray[0]};
  z-index: 2;
`;

const SContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const SButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.gray[0]};
  left: 0;
  cursor: pointer;
  &:hover {
    border-color: ${props => props.theme.colors.gray[5]};
  }
  img {
    width: 20px;
  }
`;

export default Header;
