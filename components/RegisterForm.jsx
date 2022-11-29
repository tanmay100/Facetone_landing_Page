const RegisterForm = () => {
  return (
    <>
      <div className="m-[5em]">
        <div className="bg-[#F0EFEC] border-[3px] border-[#AF7925] rounded-[40px]">
          <p className="text-center text-[#6C5C55] text-[2em] font-[500]">
            GET FREE ACCESS TO 2 AMAZING CLASS TRAINER
          </p>
          <div className="w-[154px] h-[172px] bg-[#AF7925] rounded-[30px] ml-[3em] mb-[3em]"></div>
          <div className="flex flex-row justify-center relative bottom-[150px] ml-[60px]">
            <input
              type="text"
              placeholder="Name"
              className="text-center text-[#000] font-[500] border-[2px] border-[#AF7925]
              rounded-[50px] p-[0.5em] mr-[10px]"
            />
            <input
              type="text"
              placeholder="WhatsApp No."
              className="text-center text-[#000] font-[500] border-[2px] border-[#AF7925]
              rounded-[50px] mr-[10px]"
            />
            <button className="bg-[#AF7925] p-[10px] rounded-[20px] text-white font-500 w-[120px]">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
