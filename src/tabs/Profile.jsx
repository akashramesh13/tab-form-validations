import React from "react";

const Profile = ({ data, setData }) => {
  const handleOnValueChange = (e) => {
    if (e.target.name == "age" && !!isNaN(Number(e.target.value))) return;
    setData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [e.target.name]: e.target.value,
      },
    }));
  };
  return (
    <form className="profile-container">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={data.profile.name}
        onChange={handleOnValueChange}
      />
      <label htmlFor="age">Age</label>
      <input
        type="text"
        name="age"
        id="age"
        value={data.profile.age}
        onChange={handleOnValueChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={data.profile.email}
        onChange={handleOnValueChange}
      />
    </form>
  );
};
export default Profile;
