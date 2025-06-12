import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./components/HomePage";
import About from "./components/About/About";
import Dashboard from "./Dashboard/Dashboard";
import Courses from "./components/Courses/Courses";
import Gallery from "./components/Gallery/Gallery";
import News from "./components/News/News";
import NewsDetail from "./components/News/NewsDetials";
import Students from "./components/Students/Students";
import Alumni from "./components/Alumni/Alumni";
import Contact from "./components/Contact/Contact";
import Admission from "./components/Admission/Admission";
import CourseDetails from "./components/Courses/CourseDetails";
import AddGallery from "./Dashboard/gallery/AddGalleryImage";
import DetailsCourse from "./Dashboard/courses/CourseDetails";
import AddCourse from "./Dashboard/courses/AddCourse";
import AddNews from "./Dashboard/news/AddNews";
import NewsDetails from "./Dashboard/news/NewsDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Public Layout Wrapper Group */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/students" element={<Students />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addgallery" element={<AddGallery />} />
        <Route path="/detailscourse" element={<DetailsCourse />} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/addnews" element={<AddNews />} />
        <Route path="/newsdetails" element={<NewsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
