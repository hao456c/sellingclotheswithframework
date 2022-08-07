import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Spinner from "./Spinner/Spinner";
export default function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    window.sessionStorage.setItem("loginid", 'null');
    window.sessionStorage.setItem("loginname", 'null');
  }, []);
  return (
    <>
      <Spinner />
      <Navigate to={"/"} />
    </>
  );
}
