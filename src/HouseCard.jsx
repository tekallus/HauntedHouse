// components/HouseCard.jsx

import React from "react";

const HouseCard = (props) => {
  const {
    index,
    totalHouses,
    id,
    image,
    price,
    location,
    squareFeet,
    acres,
    yearBuilt,
    bedrooms,
    bathrooms,
    otherRooms,
    garage,
    airConditioning,
    heating,
    haunted
  } = props;

  const details = [
    { label: "Fiyat:", value: price },
    { label: "Lokasyon:", value: location },
    { label: "Metrekare:", value: squareFeet },
    { label: "Dönüm:", value: acres },
    { label: "Yapım Yılı:", value: yearBuilt },
    { label: "Yatak Odası:", value: bedrooms },
    { label: "Banyo:", value: bathrooms },
    { label: "Diğer Odalar:", value: otherRooms },
    { label: "Garaj:", value: garage ? "Evet" : "Hayır" },
    { label: "Klima:", value: airConditioning ? "Evet" : "Hayır" },
    { label: "Isıtma Sistemi:", value: heating ? "Evet" : "Hayır" },
    { label: "Lanetli:", value: haunted ? "Evet" : "Hayır" }
  ];

  return (
    <div className="house-card" key={id}>
      <p>
        {totalHouses} / {index + 1}
      </p>
      <img src={image} alt={`House ${id}`} />
      <div>
        <ul>
          {details.map((detail, i) => (
            <li key={i}>
              <span>{detail.label}</span>
              {detail.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HouseCard;
