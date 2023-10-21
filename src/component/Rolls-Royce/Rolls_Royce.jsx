import { useLoaderData } from "react-router-dom";
import FerrariBanner from "../Ferrari/FerrariBanner/FerrariBanner";
import Rolls_RoyceCard from "./Rolls_RoyceCard/Rolls_RoyceCard";
import { useState } from "react";
import Swal from "sweetalert2";

const Rolls_Royce = () => {
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
           fetch(`http://localhost:5000/Rolls_Royce/${id}`, {
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
                         loaderData?.map(data => <Rolls_RoyceCard key={data._id} data={data} HandleDelete={HandleDelete}></Rolls_RoyceCard> )
                    }
               </div>
          </div>
     );
};

export default Rolls_Royce;