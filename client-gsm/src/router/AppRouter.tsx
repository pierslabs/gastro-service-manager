import { Navigate, Route, Routes } from "react-router";
import AuthRouter from "../auth/router/AuthRouter";
import GastroRouter from "../gastroApp/router/GastroRouter";

type Status = string;

const AppRouter = () => {
  const status: Status = "not-authenticated";

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<GastroRouter />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
