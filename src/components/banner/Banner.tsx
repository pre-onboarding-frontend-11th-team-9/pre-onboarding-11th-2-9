import styles from "./Banner.module.scss";
import banner from "../../assets/img/optimize.jpg";

const Banner = () => {
  return (
    <a
      href="https://www.wanted.co.kr"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.banner}
    >
      <img src={banner} alt="배너이미지" />
    </a>
  );
};

export default Banner;
