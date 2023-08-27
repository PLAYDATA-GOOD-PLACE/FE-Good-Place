import React, { useEffect } from "react";
import "./Map.css";
import cutlery from "../../assets/cutlery.png";
const { kakao } = window;

const PlaceMap = ({ coordinateX, coordinateY, storeName, placeId }) => {
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(coordinateY, coordinateX),
      level: 3,
    };
    const map = new kakao.maps.Map(mapContainer, options);

    const markerPosition = new kakao.maps.LatLng(coordinateY, coordinateX);

    const markerImage = new kakao.maps.MarkerImage(
      cutlery,
      new kakao.maps.Size(64, 69),
      { offset: new kakao.maps.Point(27, 69) },
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    marker.setMap(map);

    const content =
      `<div class="customoverlay">` +
      // eslint-disable-next-line no-template-curly-in-string
      `  <a href="https://map.kakao.com/link/map/${placeId}" target="_blank">` +
      `    <span class="title">${storeName}</span>` +
      `  </a>` +
      `</div>`;

    const overlayPosition = new kakao.maps.LatLng(coordinateY, coordinateX);
    const customOverlay = new kakao.maps.CustomOverlay({
      position: overlayPosition,
      content: content,
      yAnchor: 1,
    });
    customOverlay.setMap(map);

    function setZoomable(zoomable) {
      map.setZoomable(zoomable);
    }

    setZoomable(false);
  }, [coordinateX, coordinateY]);

  return <div id="map" style={{ width: "100%", height: "537px" }}></div>;
};

export default PlaceMap;
