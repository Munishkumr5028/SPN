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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Public Layout Wrapper Group */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/students" element={<Students />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
