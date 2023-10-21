import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const Brands = [
    { value: "", text: "Select brand Name" },
    { value: "Ferrari", text: "Ferrari" },
    { value: "Lamborghini", text: "Lamborghini" },
    { value: "Toyota", text: "Toyota" },
    { value: "Mercedes", text: "Mercedes" },
    { value: "Rolls_Royce", text: "Rolls_Royce" },
    { value: "BMW", text: "BMW" },
    { value: "Bugatti", text: "Bugatti" },
    { value: "Tesla", text: "Tesla" },
  ];

  const [selected, setSelected] = useState("");

  const HandleSelected = (e) => {
    // console.log(e.target.value)
    setSelected(e.target.value);
  };

  const HandleProductCreate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const Image = form.Image.value;
    const ProductType = form.ProductType.value;
    const price = form.price.value;
    const Rating = form.Rating.value;
    const Short_description = form.Short_description.value;
    const createProduct = {
      name,
      Image,
      ProductType,
      price,
      Rating,
      Short_description,
      selected,
    };
    fetch(`https://carbazar-server-site.vercel.app/${selected}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "product added success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        form.reset();
      });
  };

  return (
    <section className="p-6 text-gray-100">
      <form
        onSubmit={HandleProductCreate}
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900"
      >
        <h2 className="w-full text-3xl font-bold leadi">Create a Product</h2>
        <div>
          <label className="block mb-1 ml-1">Photo Url</label>
          <input
            id="text"
            type="text"
            placeholder="Your name"
            required=""
            name="Image"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"
          />
        </div>
        <div>
          <label className="block mb-1 ml-1">Product Name</label>
          <input
            id="name"
            type="text"
            placeholder="Product Name"
            required=""
            name="name"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"
          />
        </div>
        <div>
          <select
            onChange={HandleSelected}
            className="select select-primary bg-gray-800 text-white w-full "
          >
            {Brands.map((brand) => (
              <option key={brand.value} value={brand.value}>
                {brand.text}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <div>
            <label className="block mb-1 ml-1">Product Type</label>
            <input
              type="text"
              placeholder="Your product type"
              required=""
              name="ProductType"
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"
            />
          </div>
          <div>
            <label className="block mb-1 ml-1">Price</label>
            <input
              id="email"
              type="text"
              placeholder="Your product price"
              required=""
              name="price"
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 ml-1">Rating</label>
          <input
            id="email"
            type="text"
            placeholder="Your product Rating"
            required=""
            name="Rating"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"
          />
        </div>
        <div>
          <label className="block mb-1 ml-1">Short description</label>
          <textarea
            id="message"
            type="text"
            name="Short_description"
            placeholder="description..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-rose-400 focus:ri hover:ri text-gray-900"
          >
            create
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
