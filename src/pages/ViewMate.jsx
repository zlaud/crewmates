import { supabase } from "../client";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ViewMate = () => {
  const [mate, setMate] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const readMate = async () => {
      const { data } = await supabase
        .from("mates")
        .select()
        .eq("id", id)
        .single();
      setMate(data);
    };
    readMate();
  }, []);

  const note = () => {
    if (mate.expyear <= 2) {
      return <p>Not a lot of experience. Might need some guidance</p>;
    } else if (2 < mate.expyear <= 7) {
      return <p>Pretty good at their role</p>;
    } else {
      return <p>Goated. Can lead the team.</p>;
    }
  };

  return (
    <>
      <div>
        {mate && (
          <div className="m-5 flex flex-col items-center">
            <h1 className="text-2xl font-bold">Name: {mate.name}</h1>
            <h2 className="text-xl font-semibold m-2">Information:</h2>
            <ul>
              <li>Role: {mate.role}</li>
              <li>Availability: {mate.availability}</li>
              <li>Years of Experience: {mate.expyear}</li>
              <div className="flex">
                <h3 className="px-2">Note: </h3>
                {note()}
              </div>
            </ul>
            <Link to={`/edit/${mate.id}`}>
              <h4 className="bg-[#2b3439] text-white rounded-md px-4 py-1 cursor-pointer w-80 m-3">
                Edit
              </h4>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewMate;
