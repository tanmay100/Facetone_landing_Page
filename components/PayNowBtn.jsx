const PayNowBtn = () => {
  return (
    <>
      <div className="text-center mt-[3em]">
        <a href="#pricebox">
          <button
            className="text-white w-[329px] bg-[#AF7925] rounded-[10px]"
            style={{
              fontSize: "1.7em",
              width: "180px",
              padding: "3px",
              border: "2px solid #AF7925",
              borderRadius: "10px",
            }}
          >
            PAY NOW
          </button>
        </a>
      </div>
    </>
  );
};

export default PayNowBtn;
