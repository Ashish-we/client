import React, { useState } from "react";

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [companyId] = useState("your_company_id"); // Replace with actual company ID
  const [status] = useState("hidden"); // Hidden field for status

  const skills = [
    "Skill 1",
    "Skill 2",
    "Skill 3",
    // Add more skills as needed
  ];

  const handleSkillChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSkills((prevSkills) => [...prevSkills, value]);
    } else {
      setSelectedSkills((prevSkills) =>
        prevSkills.filter((skill) => skill !== value)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create job object
    const job = {
      title: jobTitle,
      description: jobDescription,
      dueDate: dueDate,
      skills: selectedSkills,
      companyId: companyId,
      status: status,
    };

    // Handle job submission logic here
    console.log(job);

    // Reset form fields
    setJobTitle("");
    setJobDescription("");
    setDueDate("");
    setSelectedSkills([]);
  };

  return (
    <div className="my-10 mx-64 font-poppins">
      <h2 className="text-3xl font-semibold mb-8">Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block font-semibold mb-2">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobDescription" className="block font-semibold mb-2">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="dueDate" className="block font-semibold mb-2">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="skills" className="block font-semibold mb-2">
            Skills
          </label>
          {skills.map((skill) => (
            <div key={skill} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={skill}
                value={skill}
                checked={selectedSkills.includes(skill)}
                onChange={handleSkillChange}
                className="mr-2"
              />
              <label htmlFor={skill}>{skill}</label>
            </div>
          ))}
        </div>
        <input type="hidden" name="companyId" value={companyId} />
        <input type="hidden" name="status" value={status} />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostJob;
