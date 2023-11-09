import noCar from "../../img/d21bdb14cfac64634ea5e402aa4bd3aaf1bbb270.jpg";
import s from "./Card.module.scss";
import { HiOutlineHeart } from "react-icons/hi";

import { useAppDispatch, useAppSelector } from "../../hooks/Hooks";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { IData } from "../../redux/carsSlice/carsSlice";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/favoriteSlice/favoriteSlice";

export function Card({
  model,
  make,
  id,
  img,
  year,
  address,
  rentalPrice,
  rentalCompany,
  type,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
}: IData) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const favoriteList = useAppSelector((state) => state.favorite.favoriteList);
  const isFavorite = favoriteList.includes(id);
  const dispatch = useAppDispatch();


  const incrementFavorite = () => {
     dispatch(addFavorite({ id }));
  };
  const decrementFavorite = () => {
   dispatch(removeFavorite({ id }));
  };

  const FullAddress = address.split(", ");
  const city = FullAddress[1];
  const country = FullAddress[2];

  const FunctionaLity = functionalities[1];
  return (
    <div className={s.containerCard}>
      <div className={s.containerImg}>
        <img className={s.img} width={300} src={img ? img : noCar} alt={make} />
        <button
          onClick={!isFavorite ? incrementFavorite : decrementFavorite}
          className={s.buttonHeart}
        >
          {!isFavorite ? (
            <HiOutlineHeart className={s.iconHeart} />
          ) : (
            <HiOutlineHeart
              className={s.iconHeart}
              style={{ fill: "blue", color: "blue" }}
            />
          )}
        </button>
      </div>
      <div style={{ marginTop: "14px", marginBottom: "8px" }}>
        <ul className={s.containerTotleCar}>
          <li className={s.title}>{make}</li>
          <li className={s.model}>{model}</li>
          <li className={s.title}>{year}</li>
          <li className={s.title} style={{ marginLeft: "auto" }}>
            {rentalPrice}
          </li>
        </ul>
      </div>
      <div>
        <ul className={s.containerInfoCar}>
          <li className={s.infoCar}>{city}</li>
          <li className={s.infoCar}>{country}</li>
          <li className={s.infoCar}>{rentalCompany}</li>
          <li className={s.infoCar}>{type}</li>
          <li className={s.infoCar}>{make}</li>
          <li className={s.infoCar}>{id}</li>
          <li className={s.infoCar}>{FunctionaLity}</li>
        </ul>
      </div>
      <button onClick={openModal} className={s.buttonLearnMore}>
        Learn more
      </button>
      {isModalOpen && (
        <Modal
          key={id}
          model={model}
          onClose={closeModal}
          make={make}
          year={year}
          rentalPrice={rentalPrice}
          id={id}
          address={address}
          functionalities={functionalities}
          mileage={mileage}
          engineSize={engineSize}
          type={type}
          accessories={accessories}
          img={img}
          fuelConsumption={fuelConsumption}
          description={description}
          rentalConditions={rentalConditions}
        />
      )}
    </div>
  );
}
