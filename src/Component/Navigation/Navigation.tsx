import { CustomLink } from "../CustomLink/CustomLink";
import s from "./Navigation.module.scss";

export function Navigation() {
  return (
    <div>
      <ul className={s.Navigation}>
        <li className={s.NavLink}>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li className={s.NavLink}>
          <CustomLink to="/catalog">Catalogue</CustomLink>
        </li>
        <li className={s.NavLink}>
          <CustomLink to="/favorites">Faforite</CustomLink>
        </li>
      </ul>
    </div>
  );
}
