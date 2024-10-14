import React from "react";
import Model from "./Model";

const Section = ({ image, text ,modalId}) => {
  return (
    <div className="card w-96 shadow-sm bg-base-200">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        {/* <h2 className="card-title">Shoes!</h2> */}
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions">
          <button className="btn btn-primary" onClick={()=>document.getElementById(modalId).showModal()}>
            {text}
          </button>
        </div>
      </div>
      <Model modelId={modalId}/>
    </div>
  );
};

export default Section;
