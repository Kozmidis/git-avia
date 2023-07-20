import logoImage from "../../../../public/images/logoi.png";
import styled from "../Header/Header.module.css";

export const Header = () => {
  return (
    <div className={styled.header}>
      <img className={styled.logo} src={logoImage.src} />
    </div>
  );
};
