import { ToastContainer } from "react-toastify";
import OrderHeader from "../createOrder/orderPageComponents/orderHeader";

function SiparisDetaylari() {
  return (
    <div className="bg-red-700 h-screen flex flex-col items-center justify-center gap-10">
      <OrderHeader />

      <div
        className="text-white text-center font-thin flex flex-col items-center justify-center "
        style={{ fontSize: "70px" }}
      >
        <h1>
          TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI !
        </h1>
      </div>

      <ToastContainer />
    </div>
  );
}

export default SiparisDetaylari;
