import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import ReplitLogo from "../public/images/replit.png";
import TutorialImg from "../public/images/tutorial.jpg";
import CPLogo from "../public/images/cp.png";
import Qazi from "../public/images/qazi.jpg";
import JSLogo from "../public/images/jsLogo.png";

const styles = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
  accentedButton: `bg-black text-white py-2 px-4 rounded-full`,
};

const Recommendations = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get Unlimited access</div>
    </div>
  );
};
export default Recommendations;
