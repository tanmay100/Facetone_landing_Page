const PriceBox = ({ PriceData }) => {
  return (
    <>
      <div className="text-center mt-8">
        <h1 className="text-[40px] font-[500]" id="pricebox">
          Pick Your Program
        </h1>
        <p className="text-[30px] font-[400]">Start Your Transformation</p>
      </div>
      <div className="mt-[15px]">
        <div className="flex flex-row justify-evenly">
          {PriceData.map((data) => (
            <div
              className="box text-center p-[20px] bg-[#F0EFEC] border-[3px] border-[#AF7925] rounded-[40px]"
              key={data.id}
            >
              <p className="text-[30px] text-[#6C5C55] font-[500]">
                {data.title}
              </p>
              <div className="text-[30px] text-[#AF7925] mt-[5px] font-[500]">
                Fee: <span className="line-through">Rs.{data.price}</span>
                <div className="leading-[0.8em]">
                  <p>Offer Price Rs.{data.offerprice}</p>
                </div>
              </div>
              <button className="w-[230px] bg-[#AF7925] pt-[5px] pr-[15px] pb-[10px] pl-[15px] rounded-[15px] text-[20px] text-white mt-[15px]">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PriceBox;
