import memojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <Image src={memojiImage} alt="person peeking from behind laptop" />

        <div>
          <div></div>
          <div>Available for new projects</div>
        </div>
        <h1>Building Exceptional User Experiences</h1>
        <p>I specialize in transforming design into functional, high performing web applications. Let's discuss your next peoject.</p>
        <div>
          <button>
            <span>Explore My Work</span>
            <ArrowDown />

          </button>
          <button>
            <span>👋</span>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
