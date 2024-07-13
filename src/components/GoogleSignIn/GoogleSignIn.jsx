// src/components/GoogleSignIn.js
import { useContext } from "react";
import { auth, provider } from "../Firebase/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import myContext from "../context/Mycontextx";
import Loader from "./Loader/Loader";

const GoogleSignIn = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          role: "user",
        })
      );
      toast.success("Google Sign-In Successful");
      setLoading(false);
      navigate("/userdashboard");
    } catch (error) {
      console.log(error);
      toast.error("Google Sign-In Failed");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-gray-400">
      {loading && <Loader />}
      <button
        onClick={handleGoogleSignIn}
        className="bg-red-500 hover:bg-red-700 w-full text-white text-center py-2 font-bold rounded-md"
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
