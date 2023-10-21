import { useLoaderData } from "react-router-dom";
import FerrariBanner from "../Ferrari/FerrariBanner/FerrariBanner";
import LamborghiniCard from "./Lamborghini/LamborghiniCard";
import { useState } from "react";
import Swal from "sweetalert2";

const Lamborghini = () => {
  const loader = useLoaderData();
  const [loaderData, setLoaderData] = useState(loader);

  const HandleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(` https://carbazar2023-qb1z9ws4n-easin-arafats-projects.vercel.app/Lamborghini/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const filter = loaderData.filter((data) => data._id !== id);
            setLoaderData(filter);
          });
      }
    });
  };

  return (
    <div>
      <FerrariBanner></FerrariBanner>
      <h1 className="text-center text-4xl font-semibold my-8"> All Product</h1>
      <hr />
      <div className="my-20">
        {loaderData?.map((data) => (
          <LamborghiniCard
            key={data._id}
            data={data}
            HandleDelete={HandleDelete}
          ></LamborghiniCard>
        ))}
      </div>
    </div>
  );
};

export default Lamborghini;
