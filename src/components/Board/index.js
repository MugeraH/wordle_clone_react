import React from "react";
import { boardDeafult } from "./Words";

function Board() {
  const [board, setBoard] = React.useState(boardDeafult);
  return <div>Board</div>;
}

export default Board;
