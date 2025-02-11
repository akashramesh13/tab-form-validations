import React from "react";

const Profile = ({ data, setData }) => {
  const handleOnValueChange = ({ target: { name, value } }) => {
    if (name == "age" && !!isNaN(Number(value))) return;
    setData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [name]: value,
      },
    }));
  };
  const {name, age, email} = data.profile;
  return (
    <form className="profile-container">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleOnValueChange}
      />
      <label htmlFor="age">Age</label>
      <input
        type="text"
        name="age"
        id="age"
        value={age}
        onChange={handleOnValueChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleOnValueChange}
      />
    </form>
  );
};
export default Profile;
