import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CarItemList = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="my-28">
      <h1 className="text-center text-5xl font-bold">All Car Brand</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 mt-20">
        <Link data-aos="fade-up" to="/Ferrari">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-48" src="https://i.ibb.co/y6QRyQX/ferrari-horse-logo-vector-removebg-preview.png" alt="Shoes" />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title text-2xl">Ferrari</h2>
            </div>
          </div>
        </Link>
        <Link data-aos="fade-up" to="/Lamborghini">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-48" src="https://i.ibb.co/JnFcY9X/A160057-web-2880-removebg-preview.png" alt="Shoes" />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title text-2xl">Lamborghini</h2>
            </div>
          </div>
        </Link>
        <Link data-aos="fade-up" to="/Toyota">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-48" src="https://i.ibb.co/DbCjt9v/emblem-ogp-001-removebg-preview.png" alt="Shoes" />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title text-2xl">Toyota</h2>
            </div>
          </div>
        </Link>
        <Link data-aos="fade-up" to="/Mercedes">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-48" src="https://i.ibb.co/bN2PxNN/download-2-removebg-preview.png" alt="Shoes" />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title text-2xl">Mercedes</h2>
            </div>
          </div>
        </Link>
        <Link data-aos="fade-up" to="/Rolls_Royce">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-48" src="https://i.ibb.co/JtrzCyF/Rolls-Royce-logo-2048x2048.webp" alt="Shoes" />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title text-2xl">Rolls-Royce</h2>
            </div>
          </div>
        </Link>
        <Link data-aos="fade-up" to="/BMW">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-48" src="https://i.ibb.co/VHxJv1c/download-1-removebg-preview.png" alt="Shoes" />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title text-2xl">BMW</h2>
            </div>
          </div>
        </Link>
        <Link data-aos="fade-up" to="/Bugatti">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-48" src="https://i.ibb.co/0jRzjDq/Bugatti-logo-svg.png" alt="Shoes" />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title text-2xl">Bugatti</h2>
            </div>
          </div>
        </Link>
        <Link data-aos="fade-up" to="/Tesla">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-48" src="https://i.ibb.co/m4G9gJB/Tesla-logo.png" alt="Shoes" />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title text-2xl">Tesla</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CarItemList;
