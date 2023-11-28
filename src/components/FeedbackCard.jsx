/* eslint-disable react/prop-types */
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div
    className={`flex justify-between flex-col text-white rounded-[20px] px-10 py-12 max-w-[370px] sm:mr-5 md:mr-10 mr-0 my-5 feedback-card`}
  >
    <img
      src={quotes}
      alt="quotes"
      className={`w-[42px] h-7 mb-7 object-contain`}
    />
    <p className={`font-poppins font-normal text-[18px] leading-8 my-10`}>
      {content}
    </p>

    <div className="flex flex-row items-center ">
      <img src={img} alt={name} className="w-12 h-12 mr-4 rounded-full" />{" "}
      <div className="flex flex-col">
        <h4 className={`font-poppins text-[20px] leading-8 font-semibold `}>
          {name}
        </h4>
        <p
          className={`font-poppins text-[16px] leading-6 text-dimWhite opacity-50 `}
        >
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
