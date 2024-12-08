import React from "react";
import Card from "../Components/Card_Benefits";

const Our_benefits = ({ title }) => {
  return (
    <div id="Benefits" className="flex flex-col items-center">
      <div>
        <h2 className="text-center my-10">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <Card
          title={"Простота и удобство работы"}
          description={
            "Независимо от вашего опыта с цифровыми технологиями, мы поможем вам с легкостью создавать и продавать NFT, устраняя любые технические барьеры."
          }
        />
        <Card
          title={"Продвижение вашего уникального бренда"}
          description={
            "Мы поможем разработать стратегию и повысить видимость вашего искусства, чтобы привлечь больше внимания к вашему творчеству."
          }
        />
        <Card
          title={"Выход на международный рынок"}
          description={
            "Мы предоставляем доступ к глобальным NFT-платформам, где ваши работы могут найти новых поклонников и покупателей по всему миру."
          }
        />
        <Card
          title={"Новые финансовые возможности"}
          description={
            "NFT откроет для вас новые каналы дохода, позволяя монетизировать творчество на новых уровнях."
          }
        />
      </div>
    </div>
  );
};

export default Our_benefits;
