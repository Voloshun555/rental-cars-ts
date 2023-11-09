import NoCarsImg from "../../img/NoCars.png"
import s from "./NoCars.module.scss"
export const NoCars = () => {
  return <div>
    <div className={s.containerNoCars}>
      <h1 className={s.title}>No cars</h1>
      <img src={NoCarsImg} alt="NoCars" />
    </div>
  </div>;
};
