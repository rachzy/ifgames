import classes from "./Footer.module.css";

interface IProps {
  children: string;
}

const Footer: React.FC<IProps> = ({ children }) => {
  return (
    <footer className={classes.footer}>
      <p>{children}</p>
    </footer>
  );
};

export default Footer;
