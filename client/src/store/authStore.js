import axios from "../utils/axios";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
  setLoading: (val) => set({ isLoading: val }),
  register: async (name, email, password, role) => {
    try {
      set({ isLoading: true, error: null });

      const res = await axios.post("/register", {
        name,
        email,
        password,
        role,
      });

      console.log(res);
      //   const { user } = res.data;

      //   set({
      //     user,
      //     isLoggedIn: true,
      //     isLoading: false,
      //   });
    } catch (error) {
      const errorMsg =
        err.response?.data?.message || "Something went wrong during login.";
      console.error("Register Error:", errorMsg);
      set({ isLoading: false, error: errorMsg, user: null, isLoggedIn: false });
      throw new Error(errorMsg);
    }
  },

  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null });
      const res = await axios.post("/login", { email, password });
      console.log(res);

      const userData = await axios.get("/me");

      console.log(userData.data, "userdata");
      set({
        user: userData.data,
        isLoggedIn: true,
        loading: false,
      });
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Something went wrong during login.";
      console.error("Login Error:", errorMsg);
      set({ isLoading: false, error: errorMsg, user: null, isLoggedIn: false });
      throw new Error(errorMsg);
    }
  },
  fetchUser: async () => {
    try {
      const { data } = await axios.get("/me");
      set({ user: data, isLoggedIn: true });
    } catch (error) {
      set({ user: null, isLoggedIn: false });
    }
  },
}));

export default useAuthStore;
