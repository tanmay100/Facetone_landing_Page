import styles from "../styles/Home.module.css";
import Image from "next/image";
import PriceBox from "../components/PriceBox";
import Testimonials from "../components/Testimonials";
import PayNowBtn from "../components/PayNowBtn";
import NewTestimonial from "../components/NewTestimonial";
import MyStory from "../components/MyStory";
import Faq from "../components/Faq";
import RegisterForm from "../components/RegisterForm";
// import logo from "../public/iFaceTone1.png";

const Home = () => {
  let PriceData = [
    {
      id: "1",
      title: "10 days program",
      price: "1499",
      offerprice: "999",
    },
    {
      id: "2",
      title: "15 days program",
      price: "2499",
      offerprice: "1499",
    },
    {
      id: "3",
      title: "20 days program",
      price: "3499",
      offerprice: "199",
    },
  ];

  return (
    <>
      <div className="herosection">
        <div className="flex flex-row justify-evenly items-center">
          <Image
            src="/iFaceTone 1.png"
            width="469"
            height="327"
            className="mt-[23px] ml-[11px]"
            alt="logo"
          />
          <Image
            src="/Screenshot 2022-11-20 at 12.52 1.png"
            width="724"
            height="419"
            className="mt-[21px] ml-[3px] height-[419px] width-[824px]"
            alt="photo"
          />
        </div>
      </div>
      <PriceBox PriceData={PriceData} />
      <Testimonials />
      <PayNowBtn />
      <NewTestimonial />
      <PayNowBtn />
      <MyStory />
      <Faq />
      <RegisterForm />
    </>
  );
};
export default Home;
