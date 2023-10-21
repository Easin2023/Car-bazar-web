import { useLoaderData } from "react-router-dom";
import FerrariBanner from "../Ferrari/FerrariBanner/FerrariBanner";
import BmwCard from "./BMW/BmwCard";
import Swal from "sweetalert2";
import { useState } from "react";

const Bmw = () => {
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
        fetch(`http://localhost:5000/BMW/${id}`, {
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
                    {
                         loaderData?.map(data => <BmwCard key={data._id} data={data} HandleDelete={HandleDelete}></BmwCard>)
                    }
               </div>
          </div>
     );
};

export default Bmw;