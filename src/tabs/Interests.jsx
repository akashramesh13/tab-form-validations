import React from "react";

const Interests = ({ data, setData }) => {
  const handleCheckboxOnChange = (e, { id: currentInterestId }) => {
    setData((prev) => ({
      ...prev,
      interests: prev.interests.map((interest) =>
        interest.id === currentInterestId
          ? { ...interest, isChecked: e.target.checked }
          : interest
      ),
    }));
  };

  return (
    <form>
      {data.interests?.map(({ name, id, isChecked }) => {
        return (
          <>
            <label htmlFor={name}>{name}</label>
            <input
              key={id}
              type="checkbox"
              name={name}
              checked={isChecked}
              onChange={(e) =>
                handleCheckboxOnChange(e, { name, id, isChecked })
              }
            ></input>
          </>
        );
      })}
    </form>
  );
};

export default Interests;
