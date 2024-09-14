import React from "react";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import ChangeHistoryRoundedIcon from "@mui/icons-material/ChangeHistoryRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

function Feature() {
  const features = [
    {
      id: 1,
      name: "Centralized Component Library",
      icon: <StorageRoundedIcon className="text-sky-500 text-[32px]" />,
      description: ` Organize all your React components in a centralized library.
                  Easily browse, search, and access your saved components whenever
                  you need them`,
    },
    {
      id: 2,
      name: "Reusable Components",
      icon: <CodeRoundedIcon className="text-sky-500 text-[32px]" />,
      description: ` Create and edit your React components directly within our
                  intuitive editor. Write JSX code with syntax highlighting and
                  instant previews.`,
    },
    {
      id: 3,
      name: "Version Control and History",
      icon: <ChangeHistoryRoundedIcon className="text-sky-500 text-[32px]" />,
      description: ` Track changes and maintain different versions of your
                  components. Revert to previous versions if needed and keep a
                  history of modifications.`,
    },
  ];

  return (
    <section className=" py-12 bg-slate-50 mt-12 text-slate-700">
      <div className=" mx-auto px-4 ">
        <h2 className="text-2xl font-bold text-center ">Key Features</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" p-6 bg-white rounded-lg shadow-sm flex flex-col items-center "
            >
              <div className="w-20 h-20 rounded-full items-center justify-center flex bg-sky-100">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-sky-500 mt-6 text-center">
                {feature.name}
              </h3>
              <p className="text-slate-600 text-[13px] mt-2 text-center w-[80%]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
