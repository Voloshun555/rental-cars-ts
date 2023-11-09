import { Navigation } from "../Navigation/Navigation";
import { Container } from "../Container/Container";
import s from "./Header.module.scss";
export function Header() {
  return (
    <header className={s.containerHeader}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}
