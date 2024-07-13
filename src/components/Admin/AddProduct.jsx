import { useState } from "react";
import myContext from "../../context/Mycontextx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDb } from "../../Firebase/FirebaseConfig";
import Loader from "../Loader/Loader";

const categoryList = [
  {
    name: "fashion",
  },
  {
    name: "shirt",
  },
  {
    name: "jacket",
  },
  {
    name: "mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "shoes",
  },
  {
    name: "home",
  },
  {
    name: "books",
  },
];
const AddProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();
  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
   const returnONDashBoard = () => {
     navigate("/admindashboard");
   };

   const addProductFunction = async () => {
        if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "") {
            return toast.error("All fields are required")
        }
        setLoading(true);
        try{
          const productRef = collection(fireDb,'product');
          await addDoc(productRef,product)
          toast.success("Add product successfuly");
          navigate('/admindashboard')
          setLoading(false);

        }catch(e){
          console.log(e);
          setLoading(false);
          toast.error("Add product falied");
        }
      }
  return (
    <div className="bg-blue-gray-400">
      <div className="relative">
        <button
          onClick={() => returnONDashBoard()}
          className="absolute left-[30px] top-[30px] p-2 border-2 border-gray-800 font-serif font-2xl font-bold rounded-lg hover:bg-gray-800 hover:text-gray-50 transition-all duration-200"
        >
          Dashboard
        </button>
      </div>
      <div className="flex justify-center items-center h-screen">
        {loading && <Loader />}
        {/* Login Form  */}
        <div className="login_Form bg-gray-50 px-8 py-6 border border-gray-700 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-gray-900 ">
              Add Product
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={(e) => {
                setProduct({
                  ...product,
                  title: e.target.value,
                });
              }}
              placeholder="Product Title"
              className="bg-gray-50 text-gray-800 border border-gray-900 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-800"
            />
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="number"
              value={product.price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value,
                });
              }}
              placeholder="Product Price"
              className="bg-gray-50 text-gray-800 border border-gray-900 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-800"
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              value={product.productImageUrl}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl: e.target.value,
                });
              }}
              placeholder="Product Image Url"
              className="bg-gray-50 text-gray-800 border border-gray-900 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-800"
            />
          </div>

          {/* Input Four  */}
          <div className="mb-3">
            <select
              value={product.category}
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
              className="w-full px-1 py-2 text-gray-800 bg-gray-50 border border-gray-900 rounded-md outline-none  "
            >
              <option disabled>Select Product Category</option>
              {categoryList.map((value, index) => {
                const { name } = value;
                return (
                  <option
                    className=" first-letter:uppercase"
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Input Five  */}
          <div className="mb-3">
            <textarea
              name="description"
              value={product.description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              placeholder="Product Description"
              rows="5"
              className=" w-full px-2 py-1 text-gray-800 bg-gray-50 border border-gray-900 rounded-md outline-none placeholder-gray-800 "
            ></textarea>
          </div>

          {/* Add Product Button  */}
          <div className="mb-3">
            <button
              type="button"
              onClick={addProductFunction}
              className="bg-gray-700 hover:bg-gray-900 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
