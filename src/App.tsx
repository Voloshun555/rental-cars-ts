import React, { useEffect } from "react";
import Layout from "./Component/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "../src/scss/_reset.scss"
import {  useAppSelector, useAppDispatch } from "./hooks/Hooks"
import { fetchCars } from "./redux/carsSlice/operations";

const Home = lazy(() => import("./Pages/Home"));
const Catalogue = lazy(() => import("./Pages/Catalogue"));
const Favorites = lazy(() => import("./Pages/Favorites"));

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const cars = useAppSelector((state) => state.cars.items);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalogue data={cars} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
