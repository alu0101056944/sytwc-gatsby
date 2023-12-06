import * as React from 'react';
import '../styles/user-score.scss';

// arrayElementWrapper and onScorePress are used to allow the parent
// to sort any component that has this component.
const UserScore = ({arrayElementWrapper = { count: 0 },
      onScorePress = () => {}}) => {
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
    const NEW_SCORE = score + 1;
    setScore(NEW_SCORE);
    onScorePress(NEW_SCORE, arrayElementWrapper);
  }
  
  const decreaseScore = () => {
    if (score >= 1) {
      const NEW_SCORE = score - 1;
      setScore(NEW_SCORE);
      onScorePress(NEW_SCORE, arrayElementWrapper);
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
