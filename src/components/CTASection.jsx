import React from "react";

function CTASection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-32 gap-6 text-slate-700">
      <h2 className="font-bold text-2xl text-center">
        Manage and Create Your UI Components
        <span className={`text-sky-500`}> Effortlessly!</span>
      </h2>
      <p className="text-center text-[15px] w-[510px] max-sm:w-full text-slate-500 ">
        Save time by reusing your favorite components. Store them in a
        centralized database and create new components with ease. Enhance your
        development workflow by having quick access to a library of reusable
        components and ensure consistency across your projects.
      </p>
      <button
        className={`block bg-sky-500 rounded-md  px-9 py-3 text-sm font-medium text-white hover:bg-sky-600    `}
        type="button"
      >
        {`Let's get started!`}
      </button>
      <img
        src={"/app.png"}
        alt="dashboard"
        width={900}
        height={400}
        className="shadow-xl mt-9 aspect-auto sm:w-auto w-[398px] rounded-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
      />
    </div>
  );
}

export default CTASection;
