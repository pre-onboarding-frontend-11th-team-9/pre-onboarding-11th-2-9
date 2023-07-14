import { styled } from 'styled-components';

const AdImage = () => {
  return (
    <SLayout href="https://www.wanted.co.kr/" target="__blank">
      <img
        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=130&q=100"
        alt="ad image"
      />
    </SLayout>
  );
};

const SLayout = styled.a`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white[0]};
  text-align: center;
  margin: 10px 0;
  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(-90deg, #2c5af0 0%, #438eff 20%, #24dfa5 100%);
  border-image-slice: 1;
`;

export default AdImage;
