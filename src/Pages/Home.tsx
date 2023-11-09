import React, { FC } from "react";
import s from "./Home.module.scss";
import homeImg from "../img/HomeCars.png";

 const Home: FC = () => {
   return (
     <div className={s.containerHome}>
       <h1 className={s.titleHome}>Welcome to our car rental service</h1>
       <div className={s.rentaKars}>
         <p>
           Save money on rental cars by searching for car rental deals on
           rental-kars. rental-kars searches for rental car deals on hundreds of
           car rental sites to help you find the cheapest car rental.
         </p>
       </div>

       <img className={s.imgHome} src={homeImg} alt="cars" />
     </div>
   );
 };
export default Home;