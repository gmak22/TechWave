import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SingleCoursePage from "./SingleCoursePage";
import { Checkout } from "../Pages/Checkout";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import { Blog } from "../Pages/Blog";
import Cart from "../Pages/Cart";
import { Update } from "../Pages/Update";
import { Admin } from "../Pages/Admin";
import { AddCourses } from "../Pages/AddCourses";
import MyLearning from "../Pages/MyLearning";
import { Courses } from "../Pages/Courses";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses/:id" element={<SingleCoursePage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/courses" element={<Courses />}/>
      <Route path="/update/:id" element={<Update />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/addCourses" element={<AddCourses />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/mylearning" element={<MyLearning />} />

    </Routes>
  );
}

export default AllRoutes;
