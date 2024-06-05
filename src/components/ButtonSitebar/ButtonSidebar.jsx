import React from "react";
import sprite from "../../svg/symbol-defs.svg";

const ButtonElement = () => {
  const data = [
    { title: "AC", iconId: "#icon-AC" },
    { title: "Automatic", iconId: "#Automatic" },
    { title: "Kitchen", iconId: "#kitchen" },
    { title: "TV", iconId: "#TV" },
    { title: "Shower", iconId: "#Shower" },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        width: "360px",
        flexWrap: "wrap",
        padding: "24px 0",
        borderTop: "1px solid #8a848471",
      }}
    >
      {data.map((item) => (
        <div key={item.title}>
          <button
            type="button"
            style={{
              width: "110px",
              display: "flex",
              height: "95px",
              gap: "8px",
              padding: "17px 18px",
              flexDirection: "column",
              border: "1px solid #5a57579e",
              borderRadius: "10px",
              alignItems: "center",
            }}
          >
            <svg style={{ width: "24px", height: "24px" }}>
              <use xlinkHref={`${sprite}${item.iconId}`} />
            </svg>

            {item.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ButtonElement;
