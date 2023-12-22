import * as React from 'react';
import '../styles/user-score.scss';


// index and onScorePress are used to allow the parent
// to sort any component that has this component.
const UserScore = ({score, onIncreaseScore, onDecreaseScore}) => {
  const likeButton = React.useRef(null);
  const dislikeButton = React.useRef(null);
  const scoreSpan = React.useRef(null);

  React.useEffect(() => {
        if (score < 1) {
          dislikeButton.current.disabled = true;
        } else {
          dislikeButton.current.disabled = false;
        }

        scoreSpan.current.textContent = `${score}`;
      }, [score]);

  return (
    <>
      <span ref={scoreSpan}>{score}</span>
      <button ref={likeButton} onClick={onIncreaseScore}>Like</button>
      <button ref={dislikeButton} onClick={onDecreaseScore}>Dislike</button>
    </>
  )
}

export default UserScore
