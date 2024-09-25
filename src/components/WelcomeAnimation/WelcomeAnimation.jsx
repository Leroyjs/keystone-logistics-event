import { useEffect, useState } from "react";
import logoPath from "../../assets/logo.svg";
import "./styles.css";

export const WelcomeAnimation = () => {
  const [hasAnimationScreen, setAnimationScreen] = useState(
    () => sessionStorage.getItem("hasAnimation") !== "false"
  );

  useEffect(() => {
    sessionStorage.setItem("hasAnimation", "false");

    setTimeout(() => {
      setAnimationScreen(false);
    }, 1000);
  }, []);

  return (
    <div className={"welcome-animation" + (hasAnimationScreen ? "" : " welcome-animation_hidden")}>
      <div className="">
        <img src={logoPath} alt="keystone" />
        <div className="welcome-animation__title">
          отражение <br /> успеха
        </div>
      </div>
    </div>
  );
};
