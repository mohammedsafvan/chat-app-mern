// eslint-disable-next-line react/prop-types
const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="gap-2 cursor-pointer label">
          <span className="label-text">Male</span>
          <input
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
            type="checkbox"
            className="checkbox border-slate-300"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="gap-2 cursor-pointer label">
          <span className="label-text">Female</span>
          <input
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
            type="checkbox"
            className="checkbox border-slate-300"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
