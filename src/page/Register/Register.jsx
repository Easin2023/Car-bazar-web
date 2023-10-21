import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import { Image } from "@nextui-org/react";

const Register = () => {
  const { createUser, GoogleLogin } = useContext(AuthContext);
  const [errorMassage, setErrorMassage] = useState("");

  const HandleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setErrorMassage("Your password is less than 6 digits");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErrorMassage("Your password does not use any capital letters");
      return;
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      setErrorMassage("You have not used any special character");
      return;
    }
    setErrorMassage("");

    createUser(email, password)
      .then((res) => {
        if (res.user) {
          Swal.fire({
            title: "user register success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
        console.log(res.user)
        const userInfo = res.user.metadata.creationTime
        const userRegisterData = { email, userInfo, name } 
        console.log(userRegisterData)
        
      })
      .catch((error) => {
        setErrorMassage(error.code);
      });
  };

  const HandleGoogleLogin = () => {
    GoogleLogin()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="relative  flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Get started Register!
          </h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>
        <button
          onClick={HandleGoogleLogin}
          className=" hover:shadow-xl hover:bg-blue-200 text-center flex items-center mx-auto mt-5 border w-48 rounded-full gap-4 text-xl p-4"
        >
          <div className="">
            <h1>
              <FaGoogle></FaGoogle>
            </h1>
          </div>
          <div>
            <h1>Google Login</h1>
          </div>
        </button>

        <form
          onSubmit={HandleRegister}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Name
            </label>

            <div className="relative">
              <input
                type="text"
                required
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter name"
                name="name"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                required
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                name="email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                required
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                name="password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
            <div>
              {errorMassage && (
                <p className="text-sm text-red-400">{errorMassage}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              already have an account?
              <Link className="underline text-blue-400" to="/login">
                login
              </Link>
            </p>

            <button
              type="submit"
              className=" btn btn-primary px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <div className="absolute lg:top-40 md:left-40 ">
          <h1 className="text-6xl font-bold">
            Welcome
            <br />
            <span className="text-red-400">CarBazar</span>
            <span className="text-2xl">.com</span>
          </h1>
        </div>
        <div className="lg:mt-80">
          <Image
            isZoomed
            alt="NextUI Fruit Image with Zoom"
            src="https://i.ibb.co/mcT0RgS/20230106025629-P90486165-high-Res-the-new-bmw-760i-xdr-removebg-preview.png"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Register;
