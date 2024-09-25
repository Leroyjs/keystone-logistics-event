import React from "react";
import { WelcomeAnimation } from "../components/WelcomeAnimation/WelcomeAnimation";
import { SearchComponent } from "../components/SearchComponent/SearchComponent";

export const MainPage = () => {
  return (
    <div>
      <WelcomeAnimation />
      <div className="page-title">Введите данные для уточнения вашего места за столом</div>
      <SearchComponent />
    </div>
  );
};
