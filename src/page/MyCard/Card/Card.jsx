import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ data,HandleProductDetails }) => {
  const { _id, Image, price, Short_description, name } = data;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div>
      <div data-aos="fade-up" className="card w-96 h-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={Image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button onClick={() => HandleProductDetails(_id)} className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
