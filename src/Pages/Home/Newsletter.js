import React from "react";
import { Fade } from "react-reveal";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.value.reset();
  };
  return (
    <div className="mt-7 sm:mt-10 newsletter">
      <div className="h-[300px]  sm:h-[400px] text-center bg-center bg-cover  w-full px-2 rounded-md sm:rounded-none sm:px-0  flex justify-center items-center text-white Container">
        <div>
          <Fade top duration={2000}>
            <h3 className="uppercase text-white">SPECIAL OFFER FOR SUBSCRIPTION</h3>
            <h2 className="text-white">
              GET INSTANT DISCOUNT FOR MEMBERSHIP
            </h2>
            <p className="italic text-white">
              Subscribe our newsletter and all latest news of our latest
              product, promotion and offers{" "}
            </p>
          </Fade>
          <Fade bottom duration={2000}>
            <form
              onSubmit={handleSubmit}
            >
              <input
                className="h-10 w-7/12 outline-none sm:h-12  sm:w-6/12 px-5 mx-auto border-2 bg-white rounded-lg block my-3"
                type="email"
                name="email"
                id=""
                placeholder="Enter Email"
                required
              />
              <button
                type="submit"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  letterSpacing: "2px",
                }}
                className="btn bg-primary text-white font-semibold hover:bg-black rounded-full border-0 mt-4"
              >
                Subscribe
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </div>
  );

};

export default Newsletter;