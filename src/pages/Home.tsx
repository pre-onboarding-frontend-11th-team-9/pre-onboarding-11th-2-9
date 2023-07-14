import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Home = () => {
  return (
    <SLayout>
      <Link to="/angular/angular-cli/issues">angular</Link>
      <Link to="/facebook/react/issues">react</Link>
    </SLayout>
  );
};

const SLayout = styled.div`
  max-width: 800px;
  height: calc(100vh - 160px);
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  margin: 0 auto;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 300px;
    text-align: center;
    font-weight: bold;
    border: 1px solid #f0f0f0;
    border-radius: 10px;
    padding: 160px 10px 10px;
    text-transform: uppercase;
    background-color: ${props => props.theme.colors.white[0]};
    background-repeat: no-repeat;
    background-position: top + 50px center;
    background-size: 150px;
    background-image: url('/images/reactLogo.png');
    &:first-child {
      background-image: url('/images/angularLogo.png');
    }
    &:hover {
      background-color: ${props => props.theme.colors.gray[2]};
    }
  }
`;

export default Home;
