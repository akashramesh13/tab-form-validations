import React, { useState } from "react";
import Profile from "../tabs/Profile";
import Settings from "../tabs/Settings";
import Interests from "../tabs/Interests";

import "./TabFormComponent.css";

const TabFormComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState();
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const { profile } = data;
        if (
          profile.age < 18 ||
          !profile.name.trim().length ||
          profile.email.trim().length < 2
        ) {
          setError("Profile tab is invalid. Please fix it thanks!");
          return false;
        }
        setError();
        return true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const { interests } = data;
        if (!interests.some((item) => item.isChecked)) {
          setError("Please choose atleast one option");
          return false;
        }
        setError();
        return true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => true,
    },
  ];

  const [data, setData] = useState({
    profile: {
      name: "Akash",
      age: 26,
      email: "akash@gmail.com",
    },
    interests: [
      { id: 1, name: "chess", isChecked: true },
      { id: 2, name: "javascript", isChecked: true },
      { id: 3, name: "video-games", isChecked: true },
    ],
    settings: [
      {
        id: 1,
        name: "light",
        isChecked: false,
      },
      {
        id: 2,
        name: "dark",
        isChecked: true,
      },
    ],
  });

  const handleTabOnClick = (e, index) => {
    if (tabs[activeTab].validate()) {
      setActiveTab(index);
    }
  };

  const handlePrevButtonClick = (e) => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleNextButtonClick = (e) => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    window.alert(JSON.stringify(data));
  };

  const ActiveComponent = tabs[activeTab].component;
  return (
    <>
      <div className="heading-container">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className="heading"
              onClick={(e) => handleTabOnClick(e, index)}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="tab-body">
        <ActiveComponent data={data} setData={setData} />
        {error && <span style={{ color: "red" }}>{error}</span>}
      </div>
      {activeTab !== 0 && <button onClick={handlePrevButtonClick}>Prev</button>}
      {activeTab !== tabs.length - 1 && (
        <button onClick={handleNextButtonClick}>Next</button>
      )}

      {activeTab === tabs.length - 1 && (
        <button type="button" onClick={handleOnSubmit}>
          Submit
        </button>
      )}
    </>
  );
};

export default TabFormComponent;
