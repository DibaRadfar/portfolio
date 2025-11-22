const Team = () => {
  return (
    <div className="flex flex-row Team justify-between bg-[#404040] h-[35.5rem]">
      <div className="relative w-[500px] h-[600px]">
        <img
          src="../../../public/img/Rectangle 4(team).svg"
          alt="team background"
          className="absolute top-[30px] object-contain z-0"
        />

        <img
          src="../../../public/img/Rectangle 5(team).svg"
          alt="team middle"
          className="absolute top-[26.688rem] right-[28.75rem] object-contain z-10"
        />

        <img
          src="../../../public/img/team 1.svg"
          alt="team photo"
          className="absolute top-[3.125rem] right-[7.938rem] z-20 object-contain "
        />
      </div>
        <div className="text mt-[6.313rem] w-[23.938rem] h-[13.75rem] ml-[10.875rem]">
          <span className="text-[38px] text-[#FFFFFF] mb-[1.875rem] justify-start">
            پروژه بزرگی دارد ؟ نگران نباشید ما یک{" "}
            <span className="text-[#FF8800]">تیم</span> داریم!
          </span>

          <p className="text-[23px] text-[#B4B4B4] leading-relaxed  mb-[1.875rem] mt-[1.875rem] justify-start">
            من آماده‌ام با تجربه و مهارت‌هایم به ایده‌های شما جان بدهم. همین
            حالا با من در ارتباط باشید
          </p>

          <button
            className="btn text-[18px] text-[#FFFFFF] border-[1px] border-[#FF8800] bg-[#FF8800] mt-[1.875rem] py-[0.75rem] px-[0.938rem] rounded-[0.5rem] transition-all duration-300 ease-out
          shadow-md hover:shadow-lg hover:shadow-orange-500/60
          hover:scale-105 hover:-translate-y-4
          cursor-pointer"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            ارتباط با ما
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="text-lg font-bold">Hello!</h3>
              <p className="py-4">Press ESC key or click outside to close</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
    </div>
  );
};
export default Team;
