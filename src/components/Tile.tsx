import React from "react";
import { Link } from "react-router-dom";

interface TileProps {
  tile: {
    icon: React.ReactNode;
    title: string;
  };
}

const Tile: React.FC<TileProps> = ({ tile }) => {
  return (
    <Link className="tile" to="https://www.finder.com.au/">
      {tile.icon}
      <h3>{tile.title}</h3>
    </Link>
  );
};

export default Tile;
