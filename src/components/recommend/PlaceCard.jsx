import React from "react";

const PlaceCard = ({ store, imageUrl }) => {
  return (
    <div>
      <p className="titleStyle">{store.address}</p>
      <p className="subTitleStyle">{store.name}</p>
      <a href={`/page_detail/${store.placeId}`}>
        <img
          style={{ borderRadius: "10px" }}
          src={imageUrl}
          alt="sunflower"
          width="499px"
          height="450px"
        />
      </a>
    </div>
  );
};

export default PlaceCard;
