import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "../../hooks/Hooks"; 

import Loader from "../Loader/Loader";
import model from "../../data/models.json";
import { ListCars } from "../ListCars/ListCars";
import { NoCars } from "../NoCars/NoCars";
import { setFilters } from "../../redux/filterSlice/filterSlice";
import { DropdownIndicator } from "./DropdownIndicator";

import "./FilterCastomSelect.scss";
import s from "./FilterSection.module.scss";




export function FilterSection({ data }:any) {
  const [carsFilter, setCarsFilter] = useState([]);
  const [selectedModel, setSelectedModel] = useState("kdf");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const [page, setPage] = useState(1);

  const isLoading = useAppSelector((state) => state.cars.isLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setCarsFilter(data);
  }, [data]);

  const formatWithCommas = (value:string) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleMinMileageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, ""); // Видалення ком ком
    const formattedValue = formatWithCommas(value);
    setMinMileage(formattedValue);
  };

  const handleMaxMileageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, ""); // Видалення ком ком
    const formattedValue = formatWithCommas(value);
    setMaxMileage(formattedValue);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const filter = {
      selectedModel,
      selectedPrice,
      minMileage,
      maxMileage,
    };
    dispatch(setFilters(filter));
  };

  const cardsPerPage = 8;
  const paginatedCars = carsFilter.slice(0, page * cardsPerPage);
  const getPage = () => setPage(page + 1);
  const totalPages = Math.ceil(carsFilter.length / cardsPerPage);

  const optionsPrice = Array.from({ length: 48 }, (_, index) => ({
    value: String((index + 3) * 10),
    label: String((index + 3) * 10),
  }));

  const modelOptions = model.map((m) => ({ value: m, label: m }));
  const priceOptions = optionsPrice.map(({ value, label }) => ({
    value,
    label,
  }));

  return (
    <section className={s.ContainerSectionFilter}>
      <form className={s.filterContainer} onSubmit={handleFormSubmit}>
        <div className={s.inputContainer}>
          <label>
            <span className={s.label}>Car brand</span>
            <Select
              components={{ DropdownIndicator }}
              classNamePrefix="custom-select"
              options={modelOptions}
              isClearable={true}
              value={modelOptions.find(
                (option) => option.value === selectedModel
              )}
              onChange={(option) =>
                setSelectedModel(option ? option.value : "")
              }
              isSearchable={true}
              placeholder="Car brand"
            />
          </label>
        </div>
        <div>
          <label>
            <span className={s.label}>Price</span>
            <Select
              components={{ DropdownIndicator }}
              classNamePrefix="custom-select"
              options={priceOptions}
              isClearable={true}
              value={priceOptions.find(
                (option) => option.value === selectedPrice
              )}
              onChange={(option) =>
                setSelectedPrice(option ? option.value : "")
              }
              isSearchable={true}
              placeholder="Price"
            />
          </label>
        </div>
        <div className={s.inputContainer}>
          <label>
            <span className={s.label}>Сar mileage / km</span>
            <div className={s.MilageKm}>
              <label className={s.labelFrom} htmlFor="From">
                From
              </label>
              <input
                className={s.inpurMileage}
                type="text"
                value={minMileage}
                onChange={handleMinMileageChange}
              />
              <label className={s.labelTo}>To</label>
              <input
                className={s.inputKm}
                type="text"
                value={maxMileage}
                onChange={handleMaxMileageChange}
              />
            </div>
          </label>
        </div>
        <button className={s.buttonSearch} type="submit">
          Search
        </button>
      </form>
      {isLoading && <Loader />}
      {carsFilter.length > 0 && <ListCars cars={paginatedCars} />}
      {carsFilter.length > 0 ? (
        totalPages !== page && (
          <button onClick={getPage} className={s.butoonLoadMore}>
            Load more
          </button>
        )
      ) : isLoading ? (
        <Loader />
      ) : (
        <NoCars />
      )}
    </section>
  );
}
