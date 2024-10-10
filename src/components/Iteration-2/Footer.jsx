import React from "react";
import { FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-black w-full">
      <section className="flex flex-col lg:flex-row font-barlow items-start justify-center text-white gap-10 p-8 ">
        <article className="flex flex-col items-start gap-10 text-center lg:text-left">
          <img
            src="../../../Assets/Iteration-2-assets/footer/logo-footer.svg"
            alt="logo-footer"
            className="h-30 lg:h-30"
          />
          <address className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <img
                src="../../../Assets/Iteration-2-assets/footer/icons/icon-1.png"
                alt="location"
                className="h-8 lg:h-8"
              />
              <span className="text-start">
                341 Londonderry Road,
                <br />
                Istanbul Türkiye
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="../../../Assets/Iteration-2-assets/footer/icons/icon-2.png"
                alt="mail"
                className="h-8 lg:h-8"
              />
              <span>aciktim@teknolojikyemekler.com</span>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="../../../Assets/Iteration-2-assets/footer/icons/icon-3.png"
                alt="phone"
                className="h-8 lg:h-8"
              />
              <span>+90 216 123 45 67</span>
            </div>
          </address>
        </article>

        <article className="flex flex-col gap-4 items-start lg:items-start">
          <h1 className="font-bold text-lg">Hot Menu</h1>
          <ul className="flex flex-col gap-2">
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </article>

        <article className="flex flex-col gap-4 items-start lg:items-start">
          <h1 className="font-semibold">Instagram</h1>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="../../../Assets/Iteration-2-assets/footer/insta/li-0.png"
              alt="insta-0"
            />
            <img
              src="../../../Assets/Iteration-2-assets/footer/insta/li-1.png"
              alt="insta-1"
            />
            <img
              src="../../../Assets/Iteration-2-assets/footer/insta/li-2.png"
              alt="insta-2"
            />
            <img
              src="../../../Assets/Iteration-2-assets/footer/insta/li-3.png"
              alt="insta-3"
            />
            <img
              src="../../../Assets/Iteration-2-assets/footer/insta/li-4.png"
              alt="insta-4"
            />
            <img
              src="../../../Assets/Iteration-2-assets/footer/insta/li-5.png"
              alt="insta-5"
            />
          </div>
        </article>
      </section>
      <div className="border-t-[1px] border-gray-600 mx-8"></div>
      <article className="flex justify-around text-white p-4 ">
        <p>© 2023 Teknolojik Yemekler. </p>
        <FaTwitter />
      </article>
    </div>
  );
}

export default Footer;
