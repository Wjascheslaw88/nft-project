import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Creators from "./Creators/Creators";
import MainLayout from "../components/layout/MainLayout";
import Discover from "./Discover/Discover";
import Sell from "./Sell/Sell";
import Stats from "./Stats/Stats";


    const Router = () => {

        return(
    <Routes>
      <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='Discover' element={<Discover/>}></Route>
      <Route path='Creators' element={<Creators/>}></Route>
      <Route path='Sell' element={<Sell/>}></Route>
      <Route path='Stats' element={<Stats/>}></Route>
      </Route>
    </Routes>

        )
    }
    
export default Router;