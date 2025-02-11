import React from "react";

const Settings = ({ data, setData }) => {
  const handleRadioButtonOnChange = (e, { id }) => {
    const updatedSettings = data.settings.map((item) =>
      item.id === id
        ? { ...item, isChecked: true }
        : { ...item, isChecked: false }
    );

    setData((prev) => ({
      ...prev,
      settings: updatedSettings,
    }));
  };
  return (
    <>
      {data.settings.map(({ name, id, isChecked }) => {
        return (
          <>
            <label htmlFor={name}>{name}</label>
            <input
              key={id}
              type="radio"
              name={name}
              checked={isChecked}
              onChange={(e) => handleRadioButtonOnChange(e, { id })}
            ></input>
          </>
        );
      })}
    </>
  );
};

export default Settings;
