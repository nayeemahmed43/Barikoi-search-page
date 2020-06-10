import React from "react";
import { useSelector } from "react-redux";


const ApiDataList = (props) => {
  const places = useSelector((state) => state.data);
  console.log( places)
  
  return (
    <div>
        
        {
            places.map(i=><p>i.address</p>)
        }
    </div>
  )
};

export default ApiDataList;
