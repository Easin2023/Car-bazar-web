import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../page/MainLayout/MainLayout";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import AddProduct from "../page/AddProduct/AddProduct";
import Ferrari from "../component/Ferrari/Ferrari";
import Lamborghini from "../component/Lamborghini/Lamborghini";
import Toyota from "../component/Toyota/Toyota";
import Mercedes from "../component/Mercedes/Mercedes";
import Rolls_Royce from "../component/Rolls-Royce/Rolls_Royce";
import Bmw from "../component/BMW/BMW";
import Bugatti from "../component/Bugatti/Bugatti";
import Tesla from "../component/Tesla/Tesla";
import Private from "../Private/Private";
import FerrariDetails from "../component/Ferrari/FerrariDetails/FerrariDetails";
import LamborghiniCardDetails from "../component/Lamborghini/LamborghiniCardDetails/LamborghiniCardDetails";
import ToyotaCardDetails from "../component/Toyota/ToyotaCardDetails/ToyotaCardDetails";
import MercedesCardDetails from "../component/Mercedes/MercedesCardDetails/MercedesCardDetails";
import Rolls_RoyceCardDetails from "../component/Rolls-Royce/Rolls_RoyceCardDetails/Rolls_RoyceCardDetails";
import BMWCardDEtails from "../component/BMW/BMWCardDEtails/BMWCardDEtails";
import BugattiCardDetail from "../component/Bugatti/BugattiCardDetail/BugattiCardDetail";
import TeslaCardDetail from "../component/Tesla/TeslaCardDetail/TeslaCardDetail";
import MyCard from "../page/MyCard/MyCard";
import Update from "../page/Update/Update";
import ErrorPage from "../page/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <Private>
            <AddProduct></AddProduct>
          </Private>
        ),
      },
      {
        path: "/MyCard",
        element: (
          <Private>
            <MyCard></MyCard>
          </Private>
        ),
        loader: () => fetch("http://localhost:5000/AddToCard"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/Ferrari",
        element: <Ferrari></Ferrari>,
        loader: () => fetch("http://localhost:5000/Ferrari"),
      },
      {
        path: "/FerrariCart/:id",
        element: (
          <Private>
            <FerrariDetails></FerrariDetails>
          </Private>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "/Lamborghini",
        element: <Lamborghini></Lamborghini>,
        loader: () => fetch("http://localhost:5000/Lamborghini"),
      },
      {
        path: "/Lamborghini/:id",
        element: (
          <Private>
            <LamborghiniCardDetails></LamborghiniCardDetails>
          </Private>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "/Toyota",
        element: <Toyota></Toyota>,
        loader: () => fetch("http://localhost:5000/Toyota"),
      },
      {
        path: "/Toyota/:id",
        element: (
          <Private>
            <ToyotaCardDetails></ToyotaCardDetails>
          </Private>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "/Mercedes",
        element: <Mercedes></Mercedes>,
        loader: () => fetch("http://localhost:5000/Mercedes"),
      },
      {
        path: "/Mercedes/:id",
        element: (
          <Private>
            <MercedesCardDetails></MercedesCardDetails>
          </Private>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "/Rolls_Royce",
        element: <Rolls_Royce></Rolls_Royce>,
        loader: () => fetch("http://localhost:5000/Rolls_Royce"),
      },
      {
        path: "/Rolls_Royce/:id",
        element: (
          <Private>
            <Rolls_RoyceCardDetails></Rolls_RoyceCardDetails>
          </Private>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "/BMW",
        element: <Bmw></Bmw>,
        loader: () => fetch("http://localhost:5000/BMW"),
      },
      {
        path: "/BMW/:id",
        element: (
          <Private>
            <BMWCardDEtails></BMWCardDEtails>
          </Private>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "/Bugatti",
        element: <Bugatti></Bugatti>,
        loader: () => fetch("http://localhost:5000/Bugatti"),
      },
      {
        path: "/Bugatti/:id",
        element: (
          <Private>
            <BugattiCardDetail></BugattiCardDetail>
          </Private>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "/Tesla",
        element: <Tesla></Tesla>,
        loader: () => fetch("http://localhost:5000/Tesla"),
      },
      {
        path: "/Tesla/:id",
        element: (
          <Private>
            <TeslaCardDetail></TeslaCardDetail>
          </Private>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "/update1/:id",
        element: <Private><Update></Update></Private>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Ferrari/${params.id}`),
      },
      {
        path: "/update2/:id",
        element: <Private><Update></Update></Private>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Lamborghini/${params.id}`),
      },
      {
        path: "/update3/:id",
        element: <Private><Update></Update></Private>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Toyota/${params.id}`),
      },
      {
        path: "/update4/:id",
        element: <Private><Update></Update></Private>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Mercedes/${params.id}`),
      },
      {
        path: "/update5/:id",
        element: <Private><Update></Update></Private>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Rolls_Royce/${params.id}`),
      },
      {
        path: "/update6/:id",
        element: <Private><Update></Update></Private>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/BMW/${params.id}`),
      },
      {
        path: "/update7/:id",
        element: <Private><Update></Update></Private>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Bugatti/${params.id}`),
      },
      {
        path: "/update8/:id",
        element: <Private><Update></Update></Private>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Tesla/${params.id}`),
      },
    ],
  },
]);

export default Router;