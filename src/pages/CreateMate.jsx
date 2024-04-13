import { supabase } from "../client";
import { useState } from "react";

const CreateMate = () => {
  const [mate, setMate] = useState({
    name: "",
    role: "",
    availability: "",
    expyear: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMate((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createMate = async (e) => {
    e.preventDefault();
    await supabase
      .from("mates")
      .insert({
        name: mate.name,
        role: mate.role,
        availability: mate.availability,
        expyear: mate.expyear,
      })
      .select();
    window.location = "/";
  };

  return (
    <div className="rounded-md bg-neutral-100 m-8 p-5 flex items-center justify-end flex-col drop-shadow-md ">
      <form className="flex flex-col items-center" onSubmit={createMate}>
        <div className="flex m-2">
          <label htmlFor="name">Name: </label> <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            onChange={handleChange}
            className="bg-neutral-200 rounded-md mx-3 px-3"
          />
        </div>

        <div className="flex m-2">
          <label htmlFor="role">
            Role:
            <select
              value={mate.role}
              id="role"
              name="role"
              required
              onChange={handleChange}
              className="bg-neutral-200 rounded-md mx-3 px-3"
            >
              <option value="">Select Role</option>
              <option value="Front-end Developer">Front-end Developer</option>
              <option value="Back-end Developer">Back-end Developer</option>
              <option value="Mobile Developer">Mobile Developer</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Marketing">Marketing</option>
            </select>
          </label>
        </div>

        <div className="flex m-2">
          <label htmlFor="availability">Availability: </label> <br />
          <input
            type="text"
            id="availability"
            name="availability"
            required
            placeholder="M, W, F"
            onChange={handleChange}
            className="bg-neutral-200 rounded-md mx-3 px-3"
          />
        </div>

        <div className="flex m-2">
          <label htmlFor="expyear">Years of Experience: </label> <br />
          <input
            type="number"
            id="expyear"
            required
            name="expyear"
            placeholder="0"
            onChange={handleChange}
            className="bg-neutral-200 rounded-md mx-3 px-3"
          />
        </div>

        <button
          type="submit"
          className="bg-[#2b3439] text-white rounded-md m-4 px-4 py-2 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateMate;
