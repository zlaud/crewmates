import { supabase } from "../client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditMate = () => {
  const { id } = useParams();
  const [mate, setMate] = useState({
    id: null,
    name: "",
    role: "",
    availability: "",
    expyear: "",
  });

  useEffect(() => {
    const fetchMate = async () => {
      if (id) {
        const { data, error } = await supabase
          .from("mates")
          .select()
          .eq("id", id);
        if (error) {
          console.error("Error fetching mate:", error.message);
        } else {
          setMate(data[0]);
        }
      }
    };

    fetchMate();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMate((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const editMate = async (e) => {
    e.preventDefault();
    await supabase
      .from("mates")
      .update({
        name: mate.name,
        role: mate.role,
        availability: mate.availability,
        expyear: mate.expyear,
      })
      .eq("id", id);
    window.location = "/";
  };

  const deleteMate = async (e) => {
    e.preventDefault();
    await supabase.from("mates").delete().eq("id", id);
    alert("Member deleted.");
    window.location = "/";
  };

  return (
    <div className="rounded-md bg-neutral-100 m-8 p-5 flex items-center justify-end flex-col drop-shadow-md ">
      <form className="flex flex-col items-center" onSubmit={editMate}>
        <div className="flex m-2">
          <label htmlFor="name">Name: </label> <br />
          <input
            type="text"
            id="name"
            name="name"
            value={mate.name}
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
              onChange={handleChange}
              className="bg-neutral-200 rounded-md mx-3 px-3"
            >
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
            value={mate.availability}
            onChange={handleChange}
            className="bg-neutral-200 rounded-md mx-3 px-3"
          />
        </div>

        <div className="flex m-2">
          <label htmlFor="expyear">Years of Experience: </label> <br />
          <input
            type="number"
            id="expyear"
            name="expyear"
            value={mate.expyear}
            onChange={handleChange}
            className="bg-neutral-200 rounded-md mx-3 px-3"
          />
        </div>
        <div className="flex">
          <button
            type="submit"
            className="bg-[#2b3439] text-white rounded-md m-4 px-4 py-2 cursor-pointer"
          >
            Update
          </button>
          <button
            className="bg-[#2b3439] text-white rounded-md m-4 px-4 py-2 cursor-pointer"
            onClick={deleteMate}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMate;
