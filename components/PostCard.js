import Image from "next/image";
import Logo from "../public/images/logo.png";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";

const styles = {
  wrapper: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer`,
  authorContainer: `flex gap-[.4rem] `,
  authorImageContainer: ` grid place-items-center rounded-full h-[1.4rem] w-[1.4rem]  overflow-hidden  `,
  authorImage: `object-cover`,
  authorName: `font-semibold`,
  title: `font-bold text-2xl`,
  briefing: `text-[#787878]`,
  detailsContainer: `flex items-center justify-between text-[#787878]`,
  articleDetails: `my-2 text-[.8rem]`,
  postDetails: `flex-[2.5rem] flex flex-col`,
  category: `bg-[#F2F3F2] p-1 rounded-full`,
  bookmarkContainer: `cursor-pointer`,
  thumbnailContainer: ``,
};
const PostCard = () => {
  return (
    <Link href={`/post/123`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                className={styles.authorImage}
                src={Logo}
                alt=""
                height={40}
                width={50}
              />
            </div>
            <div className={styles.authorName}>Roba Beths</div>
          </div>
          <h1 className={styles.title}>
            Elon Musk&apos;s new AI company, xAI, aims to understand the true
            nature of the universe
          </h1>
          <div className={styles.briefing}>
            Elon Musk&apos;s new AI company, xAI, aims to understand the true nature
            of the universe
          </div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              June 15. 5 min read.
              <span className={styles.category}>productivity</span>
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image src={Logo} height={100} width={100} alt="thumbnail" />
        </div>
      </div>
    </Link>
  );
};
export default PostCard;
