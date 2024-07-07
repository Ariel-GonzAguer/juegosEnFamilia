import React from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import Tombola from "./components/Bingo/Tombola";
import Moneda from "./components/Moneda/Moneda";
import Talonario from "./components/Talonario/Talonario";
import Ruleta from "./components/Ruleta/Ruleta";
import Root from "./components/Root/Root";
import HomePage from "./components/HomePage/HomePage";


export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="tombola" element={<Tombola />} />
      <Route path="moneda" element={<Moneda />} />
      <Route path="talonario" element={<Talonario />} />
      <Route path="ruleta" element={<Ruleta />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}
