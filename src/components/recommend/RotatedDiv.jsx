import React from "react";

const RotatedDiv = ({ onClick }) => {
  return (
    <div
      style={{
        width: "285px",
        height: "380px",
        transform: "rotate(90deg)",
        borderRadius: "20px",
        background: "#D9D9D9",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 60px",
        cursor: "pointer", // Add cursor style to indicate it's clickable
      }}
      onClick={onClick} // Attach the click event
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="78"
        height="78"
        viewBox="0 0 78 78"
        fill="none"
      >
        <rect
          x="78"
          y="33.15"
          width="11.7"
          height="78"
          rx="5.85"
          transform="rotate(90 78 33.15)"
          fill="#A8A8A8"
        />
        <rect
          x="44.8496"
          y="78"
          width="11.7"
          height="78"
          rx="5.85"
          transform="rotate(-180 44.8496 78)"
          fill="#A8A8A8"
        />
      </svg>
    </div>
  );
};

export default RotatedDiv;
