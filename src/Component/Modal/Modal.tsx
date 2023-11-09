import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import s from "./Modal.module.scss";
import { createPortal } from "react-dom";
const modalRoot: any = document.querySelector("#modal-root");
if (!modalRoot) {
  throw new Error("Element with id 'modal-root' not found");
}

interface IModalProps {
  model: string;
  make: string;
  onClose: () => void;
  img: string;
  year: number;
  id: string;
  address: string;
  rentalPrice: string;
  type: string;
  functionalities: string[];
  accessories: string[];
  rentalConditions: string;
  mileage: number;
  fuelConsumption: string;
  engineSize: string;
  description: string;
}

const toggleBodyOverflow = (toggle: boolean) => {
  if (toggle) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
export function Modal({
  model,
  make,
  onClose,
  img,
  year,
  id,
  address,
  rentalPrice,
  type,
  functionalities,
  accessories,
  rentalConditions,
  mileage,
  fuelConsumption,
  engineSize,
  description,
}: IModalProps) {
  useEffect(() => {
    toggleBodyOverflow(true);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      toggleBodyOverflow(false);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const onOverlay = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const rentalConditionsSplitted = rentalConditions.split("\n");
  const firstElement = rentalConditionsSplitted[0].split(": ");

  const addressParts = address.split(", ");
  const city = addressParts[1];
  const country = addressParts[2];

  return createPortal(
    <div className={s.becdropModal} onClick={onOverlay}>
      <div className={s.containerModal}>
        <button onClick={onClose} type="button" className={s.btnClose}>
          <AiOutlineClose className={s.svgClose} />
        </button>

        <img className={s.imgModal} src={img} alt={model} />
        <div className={s.containerTitleModal}>
          <ul className={s.titleModal}>
            <li className={s.marka}>{make}</li>
            <li className={s.Modal}>{model}</li>
            <li>{year}</li>
          </ul>
          <div>
            <div className={s.infoCarModal}>
              <ul className={s.containerInfoCar}>
                <li className={s.infoCar}>{city}</li>
                <li className={s.infoCar}>{country}</li>
                <li className={s.infoCar}>id: {id}</li>
                <li className={s.infoCar}>year: {year}</li>
                <li className={s.infoCar}>type: {type}</li>
                <li className={s.infoCar}>
                  Fuel Consumption: {fuelConsumption}
                </li>
                <li className={s.infoCar}>Engine Size: {engineSize}</li>
              </ul>
            </div>
            <div className={s.description}>{description}</div>
            <p className={s.Accessories}>Accessories and functionalities:</p>
            <ul className={s.AccessoriesInfo}>
              {accessories.map((item, index) => (
                <li className={s.accessoriesInfoList} key={index}>
                  {item}
                </li>
              ))}
              {functionalities.map((item, index) => (
                <li className={s.accessoriesInfoList} key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <div>
              <p className={s.rentalCredition}>Rental Conditions:</p>
              <ul className={s.rentalConditionsList}>
                <li className={s.conditions}>
                  {firstElement[0]}:{" "}
                  <span className={s.numberAge} style={{ color: "#3470FF" }}>
                    {firstElement[1]}
                  </span>
                </li>
                <li className={s.conditions}>{rentalConditionsSplitted[1]}</li>
                <li className={s.conditions}>{rentalConditionsSplitted[2]}</li>
                <li className={s.conditions}>
                  mileage:{" "}
                  <span className={s.mileageAndPrice}>
                    {Number(mileage).toLocaleString("en")}
                  </span>
                </li>
                <li className={s.conditions}>
                  Price:{" "}
                  <span className={s.mileageAndPrice}>{rentalPrice}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a href="tel:+380730000000" className={s.RentalCar}>
          <span>Rental car</span>
        </a>
      </div>
    </div>,
    modalRoot
  );
}
