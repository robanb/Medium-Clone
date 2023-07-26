import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import ReplitLogo from "../public/images/replit.png";
import TutorialImg from "../public/images/tutorial.jpg";
import CPLogo from "../public/images/cp.png";
import Roba from "../public/images/profile.jpg";
import JSLogo from "../public/images/jsLogo.png";

const styles = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
  accentedButton: `flex items-center justify-center text-sm bg-black text-white my-[.6rem] py-[.6rem] rounded-full`,
  searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full`,
  searchInput: `border-none outline-none bg-none w-full`,
  authorContainer: `my-[2rem]`,
  authorProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
  authorName: ``,
};

const Recommendations = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get Unlimited access</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          className={styles.searchInput}
          placeholder="Search"
          type="text"
        />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image src={Roba} alt="author" width={100} height={100} />
        </div>
        <div className={styles.authorName}>Roba Eths</div>
      </div>
    </div>
    
  );
};
export default Recommendations;
