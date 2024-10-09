import React from "react";
import Header from "./Header";
import HomePage from "./HomePageContent/HomePage";
import MenuCategory from "./HomePageContent/HomePageComponents/MenuCategory";
import Recommended from "./HomePageContent/HomePageComponents/Recommended";
import ClassifiedCategories from "./HomePageContent/HomePageComponents/ClassifiedCategories";
import Footer from "./Footer";

function Main() {
  return (
    <div className="bg-gray-100">
      <HomePage />
      <Recommended />
      <ClassifiedCategories />
      <Footer />
    </div>
  );
}

export default Main;
