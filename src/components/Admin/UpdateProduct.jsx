import { useContext, useEffect, useState } from "react";
import myContext from "../../context/Mycontextx";
import { useNavigate, useParams } from "react-router-dom";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDb } from "../../Firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";


const categoryList = [
  { name: "fashion" },
  { name: "shirt" },
  { name: "jacket" },
  { name: "mobile" },
  { name: "laptop" },
  { name: "shoes" },
  { name: "home" },
  { name: "books" },
];

const UpdateProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProductFunction } = context;

  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
 const returnONDashBoard = ()=> {
  navigate("/admindashboard");
 }
  const getSingleProductFunction = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDb, "product", id));
      if (productTemp.exists()) {
        const productData = productTemp.data();
        setProduct({
          title: productData.title || "",
          price: productData.price || "",
          productImageUrl: productData.productImageUrl || "",
          category: productData.category || "",
          description: productData.description || "",
          quantity: productData.quantity || "",
          time: productData.time || Timestamp.now(),
          date:
            productData.date ||
            new Date().toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }),
        });
      } else {
        toast.error("Product not found");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDb, "product", id), product);
      toast.success("Product Updated successfully");
      getAllProductFunction();
      setLoading(false);
      navigate("/admindashboard");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProductFunction();
  }, []);

  return (
    <div className="bg-blue-gray-400">
      <div className="relative">
        <button
          onClick={()=>returnONDashBoard()}
          className="absolute left-[30px] top-[30px] p-2 border-2 border-gray-800 font-serif font-2xl font-bold rounded-lg hover:bg-gray-800 hover:text-gray-50 transition-all duration-200"
        >
          Dashboard
        </button>
      </div>
      <div className="flex justify-center items-center h-screen ">
        {loading && <Loader />}

        <div className="login_Form bg-gray-50 px-8 py-6 border border-gray-700 rounded-xl shadow-md">
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-gray-900 ">
              Update Product
            </h2>
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.title || ""}
              onChange={(e) => {
                setProduct({
                  ...product,
                  title: e.target.value,
                });
              }}
              placeholder="Product Title"
              className="bg-gray-50 border text-gray-800 border-gray-900 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-800"
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              name="price"
              value={product.price || ""}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value,
                });
              }}
              placeholder="Product Price"
              className="bg-gray-50 border text-gray-800 border-gray-900 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-800"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl"
              value={product.productImageUrl || ""}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl: e.target.value,
                });
              }}
              placeholder="Product Image Url"
              className="bg-gray-50 border text-gray-800 border-gray-900 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-800"
            />
          </div>

          <div className="mb-3">
            <select
              value={product.category || ""}
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
              className="w-full px-1 py-2 text-gray-800 bg-gray-50 border border-gray-900 rounded-md outline-none"
            >
              <option value="" disabled>
                Select Product Category
              </option>
              {categoryList.map((value, index) => (
                <option
                  className="first-letter:uppercase"
                  key={index}
                  value={value.name}
                >
                  {value.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <textarea
              name="description"
              value={product.description || ""}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              placeholder="Product Description"
              rows="5"
              className="w-full px-2 py-1 text-gray-800 bg-gray-50 border border-gray-900 rounded-md outline-none placeholder-gray-800"
            ></textarea>
          </div>

          <div className="mb-3">
            <button
              type="button"
              onClick={updateProduct}
              className="bg-gray-700 hover:bg-gray-900 w-full transition-all duration-200 text-white text-center py-2 font-bold rounded-md"
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductPage;
