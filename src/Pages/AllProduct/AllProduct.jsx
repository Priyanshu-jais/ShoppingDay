import { useNavigate } from "react-router";
import { Layout } from "../../components/Layout/Layout";
import { useContext } from "react";
import myContext from "../../context/Mycontextx";
import Loader from "../../components/Loader/Loader";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { cartAction } from "../../Redux/CartSlice";
import toast from "react-hot-toast";

const AllProduct = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProduct } = context;
  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(cartAction.addToCart(item));
    toast.success("Added to cart");
  };
  const deleteCart = (item) => {
    dispatch(cartAction.deleteFromCart(item));
    toast.success("Deleted from cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      <div className="py-8">
        {/* Heading  */}
        <div className="">
          <h1 className=" text-center mb-5 text-2xl font-semibold">
            All Products
          </h1>
        </div>

        {/* main  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 lg:px-0 py-5 mx-auto">
            <div className="flex justify-center items-center">
              {loading && <Loader />}
            </div>
            <div className="flex flex-wrap -m-4">
              {getAllProduct.map((item, index) => {
                const { id, title, price, productImageUrl } = item;
                const isInCart = cartItems.find((p) => p.id === item.id);
                return (
                  <div key={index} className="p-4 w-full md:w-1/4">
                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                      <img
                        onClick={() => navigate(`/productinfo/${id}`)}
                        className="lg:h-80  h-96 w-full"
                        src={productImageUrl}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-red-400 mb-1">
                          ShoppingDay
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {title.substring(0, 25)}
                        </h1>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          ₹{price}
                        </h1>

                        <div className="flex justify-center ">
                          {isInCart ? (
                            <button
                              onClick={() => deleteCart(item)}
                              className=" bg-gray-900 hover:bg-black transition-all duration-200 w-full text-white py-[4px] rounded-md font-bold"
                            >
                              Delete From Cart
                            </button>
                          ) : (
                            <button
                              onClick={() => addCart(item)}
                              className=" bg-gray-800 hover:bg-gray-900 transition-all duration-200 w-full text-white py-[4px] rounded-md font-bold"
                            >
                              Add To Cart
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AllProduct;
