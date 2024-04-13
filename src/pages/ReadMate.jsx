import { supabase } from "../client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ReadMate = () => {
  const [mates, setMates] = useState([]);

  useEffect(() => {
    const readMate = async () => {
      const { data } = await supabase
        .from("mates")
        .select()
        .order("created_at", { ascending: true });
      setMates(data);
    };
    readMate();
  }, []);

  const view = () => {
    <Link to={`/${mates.id}`}>
      <h4 className="bg-[#2b3439] text-white rounded-md px-4 py-1 cursor-pointer">
        Edit
      </h4>
    </Link>;
  };

  const renderMatesByRole = (role) => (
    <div className="m-5">
      <h1 className="text-2xl font-semibold my-9">{role}</h1>
      <div className="flex flex-wrap">
        {mates &&
          mates.map((mate) =>
            mate.role === role ? (
              <Link to={`/${mate.id}`} key={mate.id}>
                <div key={mate.id}>
                  <div className="rounded-md bg-neutral-100 m-8 p-5 flex items-center justify-end flex-col drop-shadow-md w-80 h-56">
                    <img src="/person.png" alt="" className="w-24" />
                    <div className="m-3">
                      <h3>Name: {mate.name}</h3>
                      <h3>Role: {mate.role}</h3>
                      <h3>Availability: {mate.availability}</h3>
                      <h3>Years of experience: {mate.expyear}</h3>
                    </div>
                    <Link to={`/edit/${mate.id}`}>
                      <h4 className="bg-[#2b3439] text-white rounded-md px-4 py-1 cursor-pointer">
                        Edit
                      </h4>
                    </Link>
                  </div>
                </div>
              </Link>
            ) : null
          )}
      </div>
    </div>
  );

  return (
    <>
      <div className="flex-wrap">
        {renderMatesByRole("Front-end Developer")}
        {renderMatesByRole("Back-end Developer")}
        {renderMatesByRole("Mobile Developer")}
        {renderMatesByRole("Product Manager")}
        {renderMatesByRole("Marketing")}
      </div>
    </>
  );
};

export default ReadMate;
