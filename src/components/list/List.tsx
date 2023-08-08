import { Dispatch } from "react";

const List = (props: {
  display: string;
  direction: string;
  gap: string;
  align: string;
  text: string;
  height: string;
  setOpenMenu: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { display, direction, gap, align, text, height, setOpenMenu } = props;

  const onHandleClose = (): void => {
    setOpenMenu(false);
  };

  return (
    <ul
      className={`${display} ${direction} ${gap} ${align} ${text} ${height} flex md:flex  justify-evenly   w-1/2 text-white font-bold transition-all duration-1000`}
    >
      <li onClick={onHandleClose}>
        <a className="text-second hover:underline underline-offset-8 cursor-pointer ">
          Title 1
        </a>
      </li>
      <li onClick={onHandleClose}>
        <a className=" hover:underline underline-offset-8 cursor-pointer">
          Title 2
        </a>
      </li>
      <li onClick={onHandleClose}>
        <a className="hover:underline underline-offset-8 cursor-pointer">
          Title 3
        </a>
      </li>
      <li onClick={onHandleClose}>
        <a className="hover:underline underline-offset-8 cursor-pointer">
          Title 4
        </a>
      </li>
    </ul>
  );
};

export default List;
