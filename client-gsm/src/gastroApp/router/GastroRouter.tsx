import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const GastroRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default GastroRouter;
