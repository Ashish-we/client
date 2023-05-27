import React, { useState } from 'react';

const Updateprofile = ({ user }) => {
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);

  const handleEditClick = () => { 
    setEditMode(true);
  };
  
  const handleSaveClick = () => {
    // Here, you can make an API call to update the user's profile
    // with the new information (firstName, lastName, email, bio)
    // For simplicity, this example doesn't include the API call.

    // After saving, exit edit mode
    setEditMode(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {editMode ? (
        <div>
          <label className="block mb-4">
            <span className="text-gray-700">First Name:</span>
            <input
              className="form-input mt-1 block w-full"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Last Name:</span>
            <input
              className="form-input mt-1 block w-full"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email:</span>
            <input
              className="form-input mt-1 block w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Bio:</span>
            <textarea
              className="form-textarea mt-1 block w-full"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </label>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <p>
            <strong>First Name:</strong> {firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {lastName}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Bio:</strong> {bio}
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Updateprofile;
