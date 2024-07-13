/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import myContext from "../../context/Mycontextx";
import { auth, fireDb, provider } from "../../Firebase/FirebaseConfig";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import GoogleButton from "react-google-button"; 
import { Layout } from "../../components/Layout/Layout";
const Signup = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const navigate = useNavigate();

  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  //user signup function
  const userSignupFunction = async () => {
    //validation
    if (
      userSignup.email === "" ||
      userSignup.name === "" ||
      userSignup.password === ""
    ) {
      return toast.error("All fields are required");
    }
    setLoading(true);

    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );
      // create user
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      //create user Refrence
      const userReference = collection(fireDb, "user");

      //add user Details
      await addDoc(userReference, user);

      setUserSignup({
        name: "",
        email: "",
        password: "",
        role: "user",
      });

      toast.success("Signup Successfully");
      setLoading(false);
      navigate("/login");
    } catch (e) {
      console.log(e);
      setLoading(false);
      toast.error("Signup Failed");
    }
  };

  //GoogleSignIn
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userProfile = {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        role: "user",
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      // Create user reference
      const userReference = collection(fireDb, "user");

      // Add user details
      await addDoc(userReference, userProfile);

      localStorage.setItem("user", JSON.stringify(userProfile));

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
    <Layout>
      <div className="flex justify-center items-center h-[715px] bg-blue-gray-400">
        {loading && <Loader />}
        {/* Signup Form */}
        <div className="login_Form bg-gray-200 px-1 lg:px-8 py-6 border border-gray-100 rounded-xl shadow-md">
          {/* Top Heading */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-gray-900">
              Signup
            </h2>
          </div>

          {/* Input One */}
          <div className="mb-3">
            <input
              type="text"
              value={userSignup.name}
              onChange={(e) =>
                setUserSignup({
                  ...userSignup,
                  name: e.target.value,
                })
              }
              placeholder="Full Name"
              className="bg-gray-50 border border-gray-800 px-2 py-2 w-96 rounded-md outline-none placeholder-black"
            />
          </div>

          {/* Input Two */}
          <div className="mb-3">
            <input
              type="email"
              value={userSignup.email}
              onChange={(e) =>
                setUserSignup({
                  ...userSignup,
                  email: e.target.value,
                })
              }
              placeholder="Email Address"
              className="bg-gray-50 border border-gray-800 px-2 py-2 w-96 rounded-md outline-none placeholder-black"
            />
          </div>

          {/* Input Three */}
          <div className="mb-5">
            <input
              type="password"
              value={userSignup.password}
              onChange={(e) =>
                setUserSignup({
                  ...userSignup,
                  password: e.target.value,
                })
              }
              placeholder="Password"
              className="bg-gray-50 border border-gray-800 px-2 py-2 w-96 rounded-md outline-none placeholder-black"
            />
          </div>

          {/* Signup Button */}
          <div className="mb-5">
            <button
              type="button"
              onClick={userSignupFunction}
              className="bg-gray-700 hover:bg-gray-900 w-full text-white text-center py-2 font-bold rounded-md"
            >
              Signup
            </button>
          </div>

          <div className="mb-5">
            <GoogleButton onClick={handleGoogleSignIn} className="w-full" />
          </div>

          <div>
            <h2 className="text-black">
              Have an account{" "}
              <Link
                className="text-gray-500 font-bold hover:text-gray-900"
                to={"/login"}
              >
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
