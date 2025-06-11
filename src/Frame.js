// src/Frame.js
import React from "react";
import d3f5D7B2436299B1Fe27Ca9Bbab511 from "./4810d3f5-d7b2-4362-99b1-fe27ca9bbab5-1-1.png";
import photo202506110942361 from "./photo-2025-06-11-09-42-36-1.png";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="div" />
          <div className="rectangle-2" />

          <p className="pony-PEPPERONI">
            <span className="text-wrapper">Pony<br /></span>
            <span className="span">PEPPERONI</span>
          </p>

          <div className="text-wrapper-2">Головна</div>
          <div className="text-wrapper-3">Про нас</div>
          <div className="text-wrapper-4">Контакти</div>
          <div className="text-wrapper-5">Меню</div>

          <p className="p">
            Автентична Італійська піца<br />у твоєму місті!
          </p>

          <div className="rectangle-3" />
          <div className="text-wrapper-6">Меню</div>

          <img className="photo" alt="Photo" src={photo202506110942361} />
          <img className="element" alt="Element" src={d3f5D7B2436299B1Fe27Ca9Bbab511} />
        </div>
      </div>
    </div>
  );
};
