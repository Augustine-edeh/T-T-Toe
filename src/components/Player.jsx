import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  const inputElement = <input type="text" />;
  const playerName = <span className="player-name">{name}</span>;

  return (
    <li>
      <span className="player">
        {isEditing ? inputElement : playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>Edit</button>
      </span>
    </li>
  );
};

export default Player;
