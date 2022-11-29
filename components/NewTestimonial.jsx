import Image from "next/image";

const NewTestimonial = () => {
  return (
    <>
      <div className="mt-[5em]">
        <p className="text-[30px] text-center font-semibold mb-[30px]">
          TESTIMONIALS
        </p>
        <div className="flex flex-row justify-evenly">
          <Image
            src="/Koko+Hayashi+image+at+31+y 1.jpg"
            width="569"
            height="307"
            className="rounded-[10px]"
          />
          <div className="w-[404px] border-[#AF7925] rounded-[30px] p-[35px] border-solid border-2 mt-[30px] text-[22px]">
            <p className="text-center">
              Firmer lifted cheeks and jawline Luminous skin
              <p className="mt-[20px] font-[500]">
                “Oh, I feel so refreshed and my skin has reversed in Age”
              </p>
              <p>-Koko Hayashi, 40 yrs</p>
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-evenly mt-[5em]">
          <div className="w-[404px] border-[#AF7925] rounded-[30px] p-[35px] border-solid border-2 mt-[30px] text-[22px]">
            <p className="text-center">
              Volumized and defined cheeks Sculpted jawline
              <p className="mt-[20px] font-[500]">
                “Now my jawline counters are clearly visible”
              </p>
              <p>-Toko Kayashi, 50 yrs</p>
            </p>
          </div>
          <Image
            src="/Screenshot 2022-11-20 at 1.12 1.jpg"
            width="569"
            height="307"
            className="rounded-[10px]"
          />
        </div>
        <div className="flex flex-row justify-evenly mt-[5em]">
          <Image
            src="/Screenshot 2022-11-20 at 1.17 1.jpg"
            width="569"
            height="307"
            className="rounded-[10px]"
          />
          <div className="w-[404px] border-[#AF7925] rounded-[30px] p-[35px] border-solid border-2 mt-[30px] text-[22px]">
            <p className="text-center">
              Sculpted and lifted cheeks Brighter skin tone
              <p className="mt-[20px] font-[500]">
                “Now I cant recognise myself in the mirror”
              </p>
              <p>-Poko Layashi, 35 yrs</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTestimonial;
