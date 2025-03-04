import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/Mycontextx";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { fireDb } from "../../Firebase/FirebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";


const ProductDetail = () => {
 const context = useContext(myContext);
 const { loading,setLoading, getAllProduct,getAllProductFunction
} = context;
 const navigate = useNavigate();

 //delete function
 const deleteProduct = async (id) => {
  setLoading(true);
  try{
    await deleteDoc(doc(fireDb,"product",id));
    toast.success("Product deleted successfully");
    getAllProductFunction();
    setLoading(false);

  }catch(e){
    console.log(e);
    setLoading(false);
  }
 }


  return (
    <div>
      <div className="py-5 flex justify-between items-center ">
        {/* text  */}
        <h1 className=" text-xl text-gray-900 font-bold">All Product</h1>
        {/* Add Product Button  */}
        <Link to={"/addproduct"}>
          <button className="px-5 py-2 bg-gray-50 hover:bg-gray-700 transition-all duration-200 hover:text-white border border-gray-900 rounded-lg">
            Add Product
          </button>
        </Link>
      </div>
      <div className="flex justify-center relative top-20">
        {loading && <Loader />}
      </div>

      {/* table  */}
      <div className="w-full overflow-x-auto mb-5">
        <table className="w-full text-left border border-collapse sm:border-separate border-gray-800 text-black">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100 font-bold fontPara"
              >
                S.No.
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100 font-bold fontPara"
              >
                Image
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
              >
                Title
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
              >
                Price
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
              >
                Category
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
              >
                Date
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
              >
                Action
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
              >
                Action
              </th>
            </tr>
            {getAllProduct.map((item, index) => {
              const { id, title, price, category, date, productImageUrl } =
                item;

              return (
                <tr key={index} className="text-gray-300">
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 ">
                    {index + 1}.
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-blue-900 first-letter:uppercase ">
                    <div className="flex justify-center items-center">
                      <img
                        className="w-10"
                        src={productImageUrl}
                        alt="productimage"
                      />
                    </div>
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                    {title}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                    ₹{price}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                    {category}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                    {date}
                  </td>
                  <td 
                  onClick={() => navigate(`/updateProduct/${id}`)}
                  className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-green-700 cursor-pointer ">
                    Edit
                  </td>
                  <td 
                  onClick={()=>deleteProduct(id)}
                  className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-red-700 cursor-pointer ">
                    Delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;
