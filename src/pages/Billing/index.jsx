import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Billing = () => {
  const [success, setSuccess] = useState(true);
  const total = useSelector((state) => state.total);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    alert("Data Saved");
  };

  const handleSuccess = () => {
    if (name === "" || city === "" || address === "" || pincode === "") {
      alert("Please fill in the details");
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="h-screen">
      {success ? (
        <div className="flex flex-col items-center mt-20">
          <div className="text-xl">Billing Details</div>
          <div className="flex w-4/5 mt-20">
            <div className="w-2/3">
              <form className="" id="Form" onSubmit={handleForm}>
                <input
                  type="text"
                  className="focus:outline-none border border-black rounded py-2 px-2 w-3/5"
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
                <br />
                <input
                  type="text"
                  className="focus:outline-none border border-black rounded py-2 px-2 w-3/5"
                  placeholder="City"
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
                <br />
                <br />
                <br />

                <input
                  type="text"
                  className="focus:outline-none border border-black rounded py-2 px-2 w-3/5"
                  placeholder="Address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
                <br />
                <br />
                <br />

                <input
                  type="text"
                  className="focus:outline-none border border-black rounded py-2 px-2 w-3/5"
                  placeholder="Pincode"
                  required
                  onChange={(e) => setPincode(e.target.value)}
                />
                <br />
                <br />
                <button className="px-12 py-2 bg-black text-white rounded">
                  {" "}
                  Save
                </button>
              </form>
            </div>
            <div className="w-1/3 border-l border-black pl-12">
              <div className="text-xl">Payment Options</div>
              <div className="w-4/5 mt-6">
                <div className="flex justify-between">
                  <div className="">Total</div>
                  <div className="">Rs {total}</div>
                </div>
                <select className="w-full border border-black mt-3 mb-8 cursor-pointer focus:outline-none">
                  <option value="Cash">Cash</option>
                </select>

                <div className="w-full mt-8">
                  <button
                    className="w-full bg-black text-white py-2 rounded hover:bg-transparent border border-black hover:text-black transition-all duration-300"
                    onClick={() => {
                      handleSuccess();
                    }}
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-20">
          <div className="text-2xl">Yayy !</div>
          <div className="text-lg">Your order has been placed</div>
          <div className="text-lg">Kindly wait for us to deliver it asap</div>
          <div className="w-1/2">
            <img src="/images/contact.png" alt="" className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Billing;
