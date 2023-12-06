import * as React from 'react';
import '../styles/user-score.scss';

const UserScore = () => {
  const [score, setScore] = React.useState(0);
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

  const increaseScore = () => {
    setScore(score + 1);
  }
  
  const decreaseScore = () => {
    if (score >= 1) {
      setScore(score - 1);
    }
  }

  return (
    <>
      <span ref={scoreSpan}>0</span>
      <button ref={likeButton} onClick={increaseScore}>Like</button>
      <button ref={dislikeButton} onClick={decreaseScore}>Dislike</button>
    </>
  )
}

export default UserScore
