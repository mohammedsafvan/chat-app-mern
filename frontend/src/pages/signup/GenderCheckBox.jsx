import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="gap-2 cursor-pointer label">
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-slate-300" />
        </label>
      </div>
      <div className="form-control">
        <label className="gap-2 cursor-pointer label">
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-slate-300" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
