const HireMe = () => {
  return (
    <div className="HireMe bg-[#262626] w-full h-[28.25rem] flex flex-row justify-evenly">
      <div className="text mt-[6.313rem] w-[23.938rem] h-[13.75rem]">
        <span className="text-[38px] text-[#FFFFFF] mb-[1.875rem] justify-start">
          پروژه‌ای در ذهن دارید؟
        </span>

        <p className="text-[23px] text-[#B4B4B4] leading-relaxed  mb-[1.875rem] mt-[1.875rem] justify-start">
          من آماده‌ام با تجربه و مهارت‌هایم به ایده‌های شما جان بدهم. همین حالا
          با من در ارتباط باشید
        </p>

        <button
          className="btn text-[18px] text-[#FFFFFF] border-[1px] border-[#FF8800] bg-[#FF8800] mt-[1.875rem] py-[0.75rem] px-[0.938rem] rounded-[0.5rem] transition-all duration-300 ease-out
          shadow-md hover:shadow-lg hover:shadow-orange-500/60
          hover:scale-105 hover:-translate-y-4
          cursor-pointer"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          تماس با من
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      <div>
        <img src="../../../public/img/HireMe.png" alt="hireme" />
      </div>
    </div>
  );
};
export default HireMe;
