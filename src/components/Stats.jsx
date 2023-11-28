import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className={`flex-1 flex items-center justify-start flex-row m-3 `}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white mr-2">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase">
            {stat.title}
          </p>
          {index !== stats.length - 1 ? (
            <div className=" text-dimWhite h-5"></div>
          ) : (
            <div className="hidden"></div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Stats;
