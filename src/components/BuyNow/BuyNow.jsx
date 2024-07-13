import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";



const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="w-full px-4 py-3 text-center text-black bg-gray-600 border border-transparent dark:border-gray-700 hover:border-gray-200 hover:text-gray-100 hover:bg-gray-800 rounded-xl"
      >
        Buy now
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className=" bg-gray-3000 border-2"
      >
        <DialogBody className="">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={addressInfo.name}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  name: e.target.value,
                });
              }}
              placeholder="Enter your name"
              className="bg-gray-50 border border-gray-800 px-2 py-2 w-full rounded-md outline-none text-gray-900 placeholder-gray-900"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address"
              value={addressInfo.address}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  address: e.target.value,
                });
              }}
              placeholder="Enter your address"
              className="bg-gray-50 border border-gray-800 px-2 py-2 w-full rounded-md outline-none text-gray-900 placeholder-gray-900"
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              name="pincode"
              value={addressInfo.pincode}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  pincode: e.target.value,
                });
              }}
              placeholder="Enter your pincode"
              className="bg-gray-50 border border-gray-800 px-2 py-2 w-full rounded-md outline-none text-gray-900 placeholder-gray-900"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="mobileNumber"
              value={addressInfo.mobileNumber}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  mobileNumber: e.target.value,
                });
              }}
              placeholder="Enter your mobileNumber"
              className="bg-gray-50 border border-gray-800 px-2 py-2 w-full rounded-md outline-none text-gray-900 placeholder-gray-900"
            />
          </div>

          <div className="">
            <Button
              type="button"
              onClick={() => {
                handleOpen();
                buyNowFunction();
              }}
              className="w-full px-4 py-3 text-center text-gray-900 bg-gray-600 border border-transparent dark:border-gray-700 rounded-lg"
            >
              Buy now
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BuyNowModal;
