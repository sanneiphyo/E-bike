import { Button } from "antd";
import bike from "../assets/image/ebike.jpg";
import {  Link } from 'react-router-dom';


const Home: React.FC = () => {
  return (
    <div className="flex flex-col-reverse items-center sm:flex-row sm:justify-between sm:ml-[8rem] mt-[3rem] sm:mr-8">
      <div className="mt-8 sm:mt-0 sm:w-1/2">
        <h1 className="text-4xl sm:text-6xl font-bold text-center sm:text-left">EcoMotion</h1>
        <h1 className="text-4xl sm:text-6xl font-bold text-center sm:text-left">E-bike</h1>
        <p className="text-xl sm:text-xl mt-3 text-center sm:text-left">
        Experience the freedom of effortless commuting with our e-bikes combining eco-friendly technology, 
        cost savings, 
        and a healthier lifestyle in one sleek ride. Discover how easy and enjoyable your daily travels can be!     
        </p>
        <div className="flex justify-center sm:justify-start">
         <Link to ="/product">
         <Button type="primary" className="bg-gray-500 mt-4 rounded-xl">
            Buy Now
          </Button>
         </Link>
         
        </div>
      </div>
      <div className="w-full sm:w-1/2 flex justify-center">
        <img src={bike} alt="EcoMotion Logo" className="w-full sm:w-2/3 h-auto mt-8 sm:mt-0" />
      </div>
    </div>
  );
};

export default Home;
