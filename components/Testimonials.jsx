const Testimonials = () => {
  return (
    <>
      <div className="m-[5em]">
        <p className="text-[30px] text-center">Testimonials</p>
        <div className="testimonials flex flex-row">
          <div
            className=""
            style={{
              height: "100px",
              width: "130px",
              background: "#af7925",
              borderRadius: "30px",
            }}
          ></div>
          <div
            className="ml-[2px]"
            style={{
              height: "100px",
              width: "130px",
              background: "#FFFFFF",
              border: "2px solid #af7925",
              borderRadius: "30px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
