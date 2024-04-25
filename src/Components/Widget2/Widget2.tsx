import { FC } from "react";
import { IWidget } from "../IntramuralContent";

export const Widget2: FC<IWidget> = ({ page, onPageChange }) => {
  const handleNextPage = () => {
    onPageChange(((page % 10) + 1).toString());
  };

  const handlePrevPage = () => {
    onPageChange((page === 1 ? 10 : page - 1).toString());
  };

  return (
    <div>
      Widget 2: {page}
      <button onClick={handlePrevPage}>Previous Page</button>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
};