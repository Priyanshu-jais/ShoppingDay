/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/Mycontextx";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDb } from "../../Firebase/FirebaseConfig";
import Loader from "../../components/Loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Layout } from "../../components/Layout/Layout";
const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate
    const navigate = useNavigate();

    // User Signup State
    const [userLogin, setUserLogin] = useState({
      email: "",
      password: "",
    });

    //userLogin Function
    const userLoginFunction = async () => {
      //validation
      if(userLogin.email === "" || userLogin.password ===""){
        toast.error("All field are required")
      }
      setLoading(true);
      try{
        const users = await signInWithEmailAndPassword(
          auth,
          userLogin.email,
          userLogin.password
        );

        try{
          const q = query(
            collection(fireDb,"user"),
            where('uid','==',users?.user?.uid)
          );
          const data = onSnapshot(q, (QuerySnapshot) => {
            let user;
            QuerySnapshot.forEach((doc) => user = doc.data());
            localStorage.setItem("user",JSON.stringify(user));
            setUserLogin({
              email:"",
              password:""
            })
            toast.success("Login Successfully")
            setLoading(false);
            if(user.role === "user"){
              navigate("/userdashboard");
            }else{
              navigate("/admindashboard");
            }
          })
          return () => data;
        }catch(error){
          console.log(error);
          setLoading(false);
        }

      }catch(e) {
        console.log(e);
        setLoading(false);
      }
    }

  return (
    <Layout>
      <div className="flex justify-center items-center h-[720px] bg-blue-gray-400">
        {loading && <Loader />}
        {/* Login Form  */}
        <div className="login_Form bg-gray-200 px-1 lg:px-8 py-6 border border-gray-700 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-gray-900 ">
              Login
            </h2>
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={userLogin.email}
              onChange={(e) => {
                setUserLogin({
                  ...userLogin,
                  email: e.target.value,
                });
              }}
              placeholder="Email Address"
              className="bg-gray-200 border border-gray-700 px-2 py-2 w-96 rounded-md outline-none placeholder-black"
            />
          </div>

          {/* Input Three  */}
          <div className="mb-5">
            <input
              type="password"
              value={userLogin.password}
              onChange={(e) => {
                setUserLogin({
                  ...userLogin,
                  password: e.target.value,
                });
              }}
              placeholder="Password"
              className="bg-gray-200 border border-gray-700 px-2 py-2 w-96 rounded-md outline-none placeholder-black"
            />
          </div>

          {/* Signup Button  */}
          <div className="mb-5">
            <button
              type="button"
              onClick={userLoginFunction}
              className="bg-gray-700 hover:bg-gray-900 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Login
            </button>
          </div>

          <div>
            <h2 className="text-black">
              Don't Have an account{" "}
              <Link
                className=" text-gray-700 hover:text-gray-900 font-bold"
                to={"/signup"}
              >
                Signup
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
