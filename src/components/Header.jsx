import style from "./Header.module.css";
import logoImg from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={logoImg} alt="Logotipo do Ignite" />
    </header>
  );
}
