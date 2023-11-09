import { useAppSelector } from "../../hooks/Hooks";
import { Card } from "../Card/Card";
import s from "./ListCars.module.scss";

import { IData } from "../../redux/carsSlice/carsSlice";
interface IcarsProps {
  cars: IData[];
}


export function ListCars({ cars }: IcarsProps) {
  const filters = useAppSelector((state) => state.filter);
  console.log(filters.minMileage);

  const filteredCars = cars.filter((car) => {
    const minMileageWithoutComma = filters.minMileage.replace(",", "");
    const maxMileageWithoutComma = filters.maxMileage.replace(",", "");
    const selectedPriceNumber = Number(filters.selectedPrice);
    const carRentalPriceNumber =
      car.rentalPrice && String(car.rentalPrice.slice(1));
    const lowerBound = String(selectedPriceNumber - 5)
    const upperBound = String(selectedPriceNumber + 5);
    
    if (filters.selectedModel && car.make !== filters.selectedModel) {
      return false;
    }
    if (
      selectedPriceNumber &&
      (carRentalPriceNumber < lowerBound || carRentalPriceNumber > upperBound)
    ) {
      return false;
    }
    if (filters.minMileage && car.mileage < Number(minMileageWithoutComma)) {
      return false;
    }
    if (filters.maxMileage && car.mileage > Number(maxMileageWithoutComma)) {
      return false;
    }
    return true;
  });

  return (
    <div>
      {cars && (
        <>
          {filteredCars.length > 0 ? (
            <ul className={s.containerCardList}>
              {filteredCars.map((car) => (
                <li key={car.id}>
                  <Card
                    model={car.model}
                    make={car.make}
                    year={car.year}
                    rentalPrice={car.rentalPrice}
                    address={car.address}
                    rentalCompany={car.rentalCompany}
                    functionalities={car.functionalities}
                    id={car.id}
                    type={car.type}
                    img={car?.img}
                    fuelConsumption={car.fuelConsumption}
                    engineSize={car.engineSize}
                    description={car.description}
                    accessories={car.accessories}
                    rentalConditions={car.rentalConditions}
                    mileage={car.mileage}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div>Sorry, no matching cars found</div>
          )}
        </>
      )}
    </div>
  );
}
