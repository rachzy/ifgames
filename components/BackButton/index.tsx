import classes from "./BackButton.module.css";

import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")} className={classes.backButton}>
      <FaArrowLeft size={20} />
    </div>
  );
};

export default BackButton;
