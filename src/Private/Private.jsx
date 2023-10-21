import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate } from "react-router-dom";

const Private = ({children}) => {
     const { user, Loading } = useContext(AuthContext);
     if(Loading){
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
     }
     else if(user){
         return children;
     }
     else{
         return <Navigate to="/login"></Navigate>;
     }

};

export default Private;