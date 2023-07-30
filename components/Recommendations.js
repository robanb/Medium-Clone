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
  authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
  authorFollowing: `text-[#787878]`,
  authorActions: `flex gap-[.6rem] my-[1rem]  `,
  actionButton: `bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm `,
  recommendationAuthorProfileImageContainer: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem] `,
  recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
  recommendationAuthorName: `text-sm font-semibold`,
  recommendationTitle: `font-bold`,
  recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
  recommendationThumbnail: `object-cover `,
  articlesContainerWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
  articleContent: `flex-[4]`,
};

const Recommendations = ({ author }) => {
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
        <div className={styles.authorFollowing}>1M followers</div>
        <div className={styles.authorActions}>
          <div className={styles.actionButton}>Follow</div>
          <div className={styles.actionButton}>
            <MdMarkEmailUnread />
          </div>
        </div>
      </div>
      <div className={styles.recommendationContainer}>
        <div className={styles.title}>More from Medium</div>
        <div className={styles.articlesContainer}>
          {recommedatedPosts.map((post) => (
            <div className={styles.articlesContainerWrapper}>
              <div className={styles.articleContent}>
                <div className={styles.recommendationAuthorContainer}>
                  <div
                    className={styles.recommendationAuthorProfileImageContainer}
                  >
                    <Image
                      src={post.author.image}
                      alt="author profile"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className={styles.recommendationAuthorName}>
                    {post.author.name}
                  </div>
                </div>
                <div className={styles.recommendationTitle}>{post.title}</div>
              </div>
              <div className={styles.recommendationThumbnailContainer}>
                <Image
                  className={styles.recommendationThumbnail}
                  src={post.image}
                  alt="author profile"
                  height={100}
                  width={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Recommendations;

const recommedatedPosts = [
  {
    title: "what can we do with repllit?",
    image: ReplitLogo,
    author: {
      name: "Rafi Qazi",
      image: CPLogo,
    },
  },
  {
    title: "The ultimate JavaScript Developer Guide",
    image: TutorialImg,
    author: {
      name: "Roba Eths",
      image: Roba,
    },
  },
  {
    title: "How to become a developer in 2023",
    image: JSLogo,
    author: {
      name: "Roba Eths",
      image: Roba,
    },
  },
];
