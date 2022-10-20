import { useNavigate } from "react-router-dom";
import classes from "./BackButton.module.css";

import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className={classes.backButton}>
      <FaArrowLeft size={20} />
    </div>
  );
};

export default BackButton;
