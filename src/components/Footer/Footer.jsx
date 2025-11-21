import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="Footer bg-[#404040] w-full  flex flex-row text-center items-center">
      <div className="flex flex-row gap-[35.688rem]">
        <img src="../../../public/img/Rectangle 2.png" alt="" />
        <img src="../../../public/img/Rectangle 3.png" alt="" />
      </div>
      <div className=" pl-[35.25rem] mt-[1.25rem]">
        <span className="text-[35px] text-[#FFFFFF]  w-[23.688rem]">با من در تماس باشید</span>
        <div className="w-[22rem] border-[0.25rem] border-[#FF8800] rounded-full mt-[1rem]"></div>
        <p className="text-[22px] text-[#B4B4B4] mb-[0.625rem]">برای همکاری، پرسش یا دریافت اطلاعات بیشتر می‌توانید از طریق راه‌های ارتباطی زیر با من در تماس باشید.</p>
        <span className="text-[#FF8800] text-[18px] mb-[0.625rem]">Email: mahan20salehi@gmail.com</span>
        <div className="flex flex-row justify-center gap-[2.188rem] py-[0.438rem] ">
          <div><FaFacebookF /></div>
          <div><BsInstagram /></div>
          <div><FaXTwitter /></div>
          <div><FaGithub /></div>
        </div>
        <span className="mb-[1.25rem] text-[#FFFFFF] text-[14px]"> 2025 Mahan. All rights reserved ©</span>
      </div>
    </div>
  );
};
export default Footer;
