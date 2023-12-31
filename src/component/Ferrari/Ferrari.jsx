import { useLoaderData } from "react-router-dom";
import FerrariBanner from "./FerrariBanner/FerrariBanner";
import FerrariCart from "./FerrariCart/FerrariCart";
import { useState } from "react";
import Swal from "sweetalert2";

const Ferrari = () => {
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
        fetch(`https://carbazar-server-site.vercel.app/Ferrari/${id}`, {
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
      <div className="my-32">
        {loaderData?.map((data) => (
          <FerrariCart
            key={data._id}
            FerrariCart={data}
            HandleDelete={HandleDelete}
          ></FerrariCart>
        ))}
      </div>
    </div>
  );
};

export default Ferrari;
