import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Rolls_RoyceCardDetails = () => {
     const [Lamborghini, setLamborghini] = useState([]);

     const { id } = useParams();
   
     useEffect(() => {
       fetch("http://localhost:5000/Rolls_Royce")
         .then((res) => res.json())
         .then((data) => {
             setLamborghini(data)
         });
   
     }, [id]);
   
     const find = Lamborghini?.find(findData => findData._id === id)
     console.log(find)
   
     return (
       <div className="m-32 bg-slate-200 rounded-lg">
         <div className="flex justify-center items-center ">
           <img src={find?.Image} alt="" />
         </div>
         <div className="mt-20 text-center">
           <h1 className="text-3xl font-semibold">{find?.name}</h1>
           <h1 className="">${find?.price}</h1>
           <p className="p-20">{find?.Short_description} {find?.Short_description} {find?.Short_description} {find?.Short_description} {find?.Short_description} {find?.Short_description} {find?.Short_description} {find?.Short_description} {find?.Short_description} {find?.Short_description} {find?.Short_description} {find?.Short_description}</p>
         </div>
       </div>
     );
};

export default Rolls_RoyceCardDetails;