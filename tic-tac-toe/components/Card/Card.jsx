import './Card.css';
import Icon from '../Icon/Icon';

function Card ({ onPlay, player, index, gameEnd}) {

  function playmov() {
    onPlay();
  }

  let icon = <Icon/>
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