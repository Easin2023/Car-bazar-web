import { Outlet } from "react-router-dom";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

const MainLayout = () => {
     return (
          <div className="container mx-auto">
               <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;