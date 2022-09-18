import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const PhoneNumber = ({ title, landline, mobile }) => (
  <div className="m-2 md:m-10 mt-6 p-4 md:p-5 sm:p-2  bg-white rounded-3xl shadow-lg">
    <div className="">
      <p className="text-center text-xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
      <div className="pt-4">
        <p className="text-center text-lg text-gray-400">{landline}</p>
        <a href={`tel:${mobile}`}>
          <p className="text-center text-lg text-gray-400">{mobile}</p>
        </a>
      </div>
    </div>
  </div>
);

export default PhoneNumber;
