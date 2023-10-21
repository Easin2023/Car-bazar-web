import { FcShop } from "react-icons/fc";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BmwCard = ({data,HandleDelete}) => {
     const { _id, Image, ProductType, price, Rating, Short_description, name } =
    data;

    const handleAddToCard = (Image, price, Short_description, name) => {
      const data = { Image, price, Short_description, name };
  
      Swal.fire({
        title: "Are you sure? add to Card",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Add to card!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Add to Card!", "Your file has been deleted.", "success");
          fetch(" https://carbazar2023-qb1z9ws4n-easin-arafats-projects.vercel.app/AddToCard", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      });
    };

  return (
     <div className="m-20">
     <div className="card lg:card-side bg-yellow-100 shadow-xl">
       <figure>
         <img
           src={Image}
           alt="Album"
         />
       </figure>
       <div className="card-body">
         <h2 className="card-title">{name}</h2>
         <p>{price}</p>
         <p>{ProductType}</p>
         <p>{Short_description}</p>
         <div className="card-actions justify-end">
         <button
              onClick={() =>
                handleAddToCard(Image, price, Short_description, name)
              }
              className="btn"
            >
              <FcShop className="text-3xl"></FcShop>
            </button>
         <Link to={`/BMW/${_id}`}>
              <button
                className="btn btn-primary"
              >
                Details
              </button>
            </Link>
            <button className="btn" onClick={() => HandleDelete(_id)}>Delete</button>
            <Link to={`/update6/${_id}`}><button className="btn btn-secondary">Update</button></Link>
         </div>
       </div>
     </div>
   </div>
  );
};

export default BmwCard;