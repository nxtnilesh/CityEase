import React from "react";
import Section from "../components/Section";

export const Main = () => {
  return (
    <main>
      {/* Main image */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>

      {/*Section  */}
      <section className="flex w-full justify-center gap-2 my-2">
        <Section image={"https://img.icons8.com/?size=100&id=11691&format=png&color=000000"} text={"Report a Issue"}/>
        <Section image={"https://img.icons8.com/?size=100&id=24875&format=png&color=000000"} text={"Track Progress"}/>
        <Section image={"https://img.icons8.com/?size=100&id=7649&format=png&color=000000"} text={"Rewards and Leaderboard"}/>
      </section>
    </main>
  );
};
