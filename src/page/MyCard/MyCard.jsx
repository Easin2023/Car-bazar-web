import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";
import Swal from "sweetalert2";

const MyCard = () => {
  const Loader = useLoaderData();
  const [loaderData, setLoaderData] = useState(Loader);

  const HandleProductDetails = (id) => {
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
        fetch(`https://carbazar-server-site.vercel.app/AddToCard/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
          const filter = loaderData?.filter(data => data._id !== id)
          setLoaderData(filter)
      }
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-24">
        Add Product card
      </h1>
      <div  className="grid grid-cols-3 gap-4 mb-20">
        {loaderData?.map((data) => (
          <Card
            key={data._id}
            data={data}
            HandleProductDetails={HandleProductDetails}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default MyCard;
