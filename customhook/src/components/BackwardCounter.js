import Card from './Card';
import useCounter from '../hooks/use-counter';

const BackwardCounter = () => {
  const counter = useCounter(false);  //deliberately passing forward==false so that -1 can be done

  return <Card>{counter}</Card>;
};

export default BackwardCounter;