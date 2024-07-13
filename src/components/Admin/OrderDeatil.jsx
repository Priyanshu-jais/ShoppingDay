import { useContext } from "react";
import myContext from "../../context/Mycontextx";
const OrderDetail = () => {
 const context = useContext(myContext);
 const {  getAllOrder, deleteOrder } = context;
  return (
    <div>
      <div>
        <div className="py-5">
          {/* text  */}
          <h1 className=" text-xl text-gray-900 font-bold">All Order</h1>
        </div>

        {/* table  */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-gray-800 text-gray-900">
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
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
                >
                  Order Id
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
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
                  Category
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
                  Quantity
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
                >
                  Total Price
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
                >
                  Status
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
                >
                  Name
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
                >
                  Address
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
                >
                  Pincode
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
                >
                  Phone Number
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-800 text-slate-700 bg-slate-100"
                >
                  Email
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
              </tr>
              {getAllOrder.map((order) => {
                return (
                  <>
                    {order.cartItems.map((item, index) => {
                                                                  const {
                                                                    id,
                                                                    productImageUrl,
                                                                    title,
                                                                    category,
                                                                    price,
                                                                    quantity,
                                                                  } = item;

                      return (
                        <tr key={index} className="text-gray-300">
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 ">
                            {index + 1}.
                          </td>

                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 ">
                            {id}
                          </td>

                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                            <img src={productImageUrl} alt="img" />
                          </td>

                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                            {title}
                          </td>

                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                            {category}
                          </td>

                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                            ₹ {price}
                          </td>

                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                            {quantity}
                          </td>

                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                            ₹ {price * quantity}
                          </td>

                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                            {order.status}
                          </td>

                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                            {order.addressInfo.name}
                          </td>

                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                            {order.addressInfo.address}
                          </td>

                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                            {order.addressInfo.pincode}
                          </td>

                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                            {order.addressInfo.mobileNumber}
                          </td>

                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                            {order.email}
                          </td>

                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500 text-gray-900 first-letter:uppercase ">
                            {order.date}
                          </td>

                          <td
                            onClick={() => deleteOrder(order.id)}
                            className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-800 stroke-slate-500  text-red-500 cursor-pointer "
                          >
                            Delete
                          </td>
                        </tr>
                      );
                    })}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
