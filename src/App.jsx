import React from "react";
import NavBar from "./Components/NavBar";
import First_screen from "./Blocks/First_screen";
import Our_benefits from "./Blocks/Our_benefits";
import Our_prices from "./Blocks/Our_prices";
import Working_Progress from "./Blocks/Working_Progress";
import FAQ from "./Blocks/FAQ";
import Contact_us from "./Blocks/Contact_us";

function App() {
  return (
    <>
      <NavBar navbar_title={"OPENGATE"} />
      {/* Начальный экран */}
      <First_screen
        title={"Discover the world of the NFT with OPENGATE"}
        description={
          "OpenGate helps artists enter the NFT market by offering support to create, promote and sell their digital works on global platforms,providing access to new audiences and increased profits."
        }
        button={"GET FREE CONSULTATION"}
      />
      {/* Наши преимущества */}
      <Our_benefits title={"OUR BENEFITS"} />
      {/* Цены */}
      <Our_prices />
      {/* Рабочий процесс */}
      <Working_Progress />
      {/* Часто задаваемые вопросы  */}
      <FAQ />
      {/* Контактная форма */}
      <Contact_us />
    </>
  );
}

export default App;
