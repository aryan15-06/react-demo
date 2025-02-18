import './Card.css';
import Icon from '../Icon/Icon';
import React from 'react';


interface CardProps {
  onPlay: (index: number) => void;
  player: string;
  index: number;
  gameEnd: boolean | string;
}

const Card: React.FC<CardProps> = ({ onPlay, player, index, gameEnd}) => {

 const playmov = (): void => {
    onPlay(index);
  };

  let icon = <Icon name="default"/>
   if(player == "X"){
      icon = <Icon name={"cross"}/>
   }else if(player == "O"){
    icon = <Icon name={"circle"}/>
   }

    return (
        <div className="card" onClick={() => !gameEnd && player=="" && onPlay(index)}>
          {icon}
        </div>
    )
}

export default Card