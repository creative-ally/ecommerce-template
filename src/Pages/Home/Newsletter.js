import React from "react";
import { Fade } from "react-reveal";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.value.reset();
  };
  return (
    <div className="mt-7 sm:mt-10 bg-teal-500">
      <div
        
        className="h-[300px]  sm:h-[400px] text-center bg-center bg-cover  w-full px-2 rounded-md sm:rounded-none sm:px-0  flex justify-center items-center text-white Container"
      >
        <div>
          <Fade top duration={2000}>
            <h3 className="text-lg my-2 sm:text-2xl uppercase text-white tracking-wider">
              SPECIAL OFFER FOR
              SUBSCRIPTION
            </h3>
            <h2
              style={{ fontFamily: "" }}
              className=" text-2xl sm:text-3xl font-semibold  sm:font-bold"
            >
              GET INSTANT DISCOUNT FOR MEMBERSHIP
            </h2>
            <p
              className="italic text-white sm:text-base text-sm py-2"
            >
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
                className=" transition w-32 sm:w-40 mx-auto text-center bg-orange-500 text-white  hover:bg-orange-600 hover:text-white rounded-full  border-2 border--500 py-1.5 sm:py-2.5"
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