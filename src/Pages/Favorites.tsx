import { FilterSection } from "../Component/FilterSection/FilterSection"; 
import { useAppSelector } from "../hooks/Hooks";

export default function Favorites() {
  const favorite = useAppSelector((state) => state.favorite.favoriteList);
  const data = useAppSelector((state) => state.cars.items);
  const favoriteCars = data.filter((car) => favorite.includes(car.id));
  return (
    <div>
      <FilterSection data={favoriteCars} />
    </div>
  );
}
