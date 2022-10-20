import classes from "./GameField.module.css";

interface IProps {
  children: React.ReactNode;
  onClick: () => void;
  color?: string;
}

const GameField: React.FC<IProps> = ({ children, onClick, color }) => {
  return (
    <div
      onClick={onClick}
      style={{ color: color }}
      className={classes.gameField}
    >
      <p>{children}</p>
    </div>
  );
};

export default GameField;
