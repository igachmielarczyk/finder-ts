import React, { useState } from "react";

// Components
import Tile from "./Tile";

interface TileData {
  icon: React.ReactNode;
  title: string;
}

interface ServicesProps {
  tiles: TileData[];
}

const Services: React.FC<ServicesProps> = ({ tiles }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="services">
      <h2>Join 2 million+ Australians finding better</h2>
      <p>
        Finder's team of 40+ experts will help you find the right choices in
        over 100 categories.
      </p>
      <div className="grid-services title-collapse">
        {tiles.slice(0, 6).map((tile) => (
          <Tile key={tile.title} tile={tile} />
        ))}
      </div>
      {!isCollapsed && (
        <div className="grid-services">
          {tiles.slice(6).map((tile) => (
            <Tile key={tile.title} tile={tile} />
          ))}
        </div>
      )}

      <button onClick={toggleCollapse}>
        {isCollapsed ? "Show more" : "Show less"} categories
        {isCollapsed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Services;
