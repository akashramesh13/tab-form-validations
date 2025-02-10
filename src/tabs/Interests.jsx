import React from "react";

const Interests = ({ data, setData }) => {
  const handleCheckboxOnChange = (e, currentInterest) => {
    const { id: currentId, isChecked } = {
      id: currentInterest.id,
      isChecked: e.target.checked,
    };
    const updatedStateForInterests = data.interests.map((interest) => {
      if (interest.id === currentId) {
        interest.isChecked = isChecked;
      }
      return interest;
    });
    setData((prev) => ({
      ...prev,
      interests: updatedStateForInterests,
    }));
  };
  return (
    <form>
      {data.interests?.map((interest) => {
        return (
          <>
            <label htmlFor={interest.name}>{interest.name}</label>
            <input
              key={interest.key}
              type="checkbox"
              name={interest.name}
              checked={interest.isChecked}
              onChange={(e) => handleCheckboxOnChange(e, interest)}
            ></input>
          </>
        );
      })}
    </form>
  );
};

export default Interests;
