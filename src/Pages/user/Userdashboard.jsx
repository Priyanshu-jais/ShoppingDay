import { useContext } from "react";
import { Layout } from "../../components/Layout/Layout";
import myContext from "../../context/Mycontextx";
import Loader from "../../components/Loader/Loader";


const UserDashboard = () => {
  const context=useContext(myContext);
  const { loading, getAllOrder, deleteOrder } = context;
  console.log(getAllOrder);
  //user
    const user = JSON.parse(localStorage.getItem("user"));
    
  return (
    <Layout >
      <div className=" container mx-auto px-4 py-5 lg:py-8">
        {/* Top  */}
        <div className="top ">
          {/* main  */}
          <div className=" bg-gray-300 py-5 rounded-xl border border-gray-800">
            {/* image  */}
            <div className="flex justify-center rounded-[100%] h-90 w-90">
              <img
                src="https://img.freepik.com/free-photo/3d-render-little-boy-with-eyeglasses-blue-shirt_1142-50994.jpg?size=626&ext=jpg&ga=GA1.1.408724050.1720260925&semt=sph"
                alt=""
                height={100}
                width={100}
              />
            </div>
            {/* text  */}
            <div className="">
              <h1 className=" text-center text-lg">
                <span className=" font-bold">Name :</span> {user.name}
              </h1>
              <h1 className=" text-center text-lg">
                <span className=" font-bold">Email :</span> {user.email}
              </h1>
              <h1 className=" text-center text-lg">
                <span className=" font-bold">Date :</span> {user.date}
              </h1>
              <h1 className=" text-center text-lg">
                <span className=" font-bold">Role :</span> {user.role}
              </h1>
            </div>
          </div>
        </div>

        {/* bottom  */}
        <div className="bottom">
          {/* main 1 */}
          <div className="mx-auto my-4 max-w-6xl  px-2 md:my-6 md:px-0">
            {/* text  */}
            <h2 className=" text-2xl lg:text-3xl font-bold">Order Details</h2>

            {/* main 2 */}
            {getAllOrder.filter((obj)=> obj.userid===user?.uid).map((order,index) => {
              return (
               <div key={index} className="">
                  {order.cartItems.map((item,index) => {
                                                            const {
                                                              id,
                                                              date,
                                                              quantity,
                                                              price,
                                                              title,
                                                              productImageUrl,
                                                              category,description
                                                            } = item;

                    return (
                      <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-gray-800 h-[250px] md:flex-row bg-white">
                        <div className="flex justify-center items-center">
                          {loading && <Loader />}
                        </div>
                        {/* main 3  */}
                        <div
                          key={index}
                          className="w-full border-r border-gray-800 bg-gray-300 md:max-w-xs"
                        >
                          {/* left  */}
                          <div className="p-8">
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                              <div className="mb-4">
                                <div className="text-sm font-semibold text-black">
                                  Order Id
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                  {id}
                                </div>
                              </div>

                              <div className="mb-4">
                                <div className="text-sm font-semibold">
                                  Date
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                  {date}
                                </div>
                              </div>

                              <div className="mb-4">
                                <div className="text-sm font-semibold">
                                  Total Amount
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                  ₹{price * quantity}
                                </div>
                              </div>

                              <div className="mb-4">
                                <div className="text-sm font-semibold">
                                  Order Status
                                </div>
                                <div className="text-sm font-medium text-green-800 first-letter:uppercase">
                                  {order.status}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* right  */}
                        <div className="flex-1">
                          <div className="p-8">
                            <ul className="-my-7 divide-y divide-gray-300">
                              <li className="flex flex-col justify-between space-x-5 py-7 md:flex-row">
                                <div className="flex flex-1 items-stretch">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="h-20 w-20 rounded-lg border border-gray-800 object-contain"
                                      src={productImageUrl}
                                      alt={"productImg"}
                                    />
                                  </div>

                                  <div className="ml-5 flex flex-col justify-between">
                                    <div className="flex-1">
                                      <p className="text-sm font-bold font-serif text-gray-900">
                                        {title}
                                      </p>
                                      <p className="mt-1.5 text-sm font-medium text-black font-serif">
                                        {category}
                                      </p>
                                    </div>

                                    <p className="mt-4 text-sm font-medium text-gray-900">
                                      x {quantity}
                                    </p>
                                    <div className="mt-2 font-bold font-serif">
                                      Description:
                                    </div>
                                    <p className="mt-0 text-sm font-medium text-gray-900">
                                      {description}
                                    </p>
                                  </div>
                                </div>

                                <div className="ml-auto flex flex-col items-end justify-between">
                                  <p className="text-right text-sm font-bold text-gray-900">
                                    ₹{price}
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
               </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
