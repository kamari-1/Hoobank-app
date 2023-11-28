import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.padding} ${styles.marginY}  rounded-[20px] flex sm:flex-row flex-col bg-black-gradient-2 `}
  >
    <div className={`flex flex-1 flex-col`}>
      <h2 className={`${styles.heading2} leading-[67px]`}>
        Let’s try our service now!
      </h2>
      <p
        className={`${styles.paragraph} leading-[28px] max-w-[470px] mt-5 text-dimWhite opacity-70`}
      >
        Everything you need to accept card payments{" "}
        <br className="sm:block hidden" />
        and grow your business anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
