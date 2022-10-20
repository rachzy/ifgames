import classes from "./Header.module.css";

interface IProps {
  children: string;
}

const Header: React.FC<IProps> = ({ children }) => {
  return (
    <header className={classes.header}>
      <p>{children}</p>
    </header>
  );
};

export default Header;
