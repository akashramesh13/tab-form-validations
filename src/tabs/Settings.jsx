import React from "react";

const Settings = ({ data, setData }) => {
  const handleRadioButtonOnChange = (e, setting) => {
    const updatedSettings = data.settings.map((item) => {
      if (setting.id == item.id) {
        item.isChecked = true;
      } else {
        item.isChecked = false;
      }
      return item;
    });
    setData((prev) => ({
      ...prev,
      settings: updatedSettings,
    }));
  };
  return (
    <>
      {data.settings.map((setting) => {
        return (
          <>
            <label htmlFor={setting.name}>{setting.name}</label>
            <input
              key={setting.key}
              type="radio"
              name={setting.name}
              checked={setting.isChecked}
              onChange={(e) => handleRadioButtonOnChange(e, setting)}
            ></input>
          </>
        );
      })}
    </>
  );
};

export default Settings;
