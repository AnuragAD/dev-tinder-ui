import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../constants/base-constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const user = await axios.get(`${BASE_URL}/profile/view`, {
        withCredentials: true,
      });
      if (user) {
        dispatch(addUser(user?.data.data));
      }
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
