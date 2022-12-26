import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;
  // const sortedList = items.sort((a, b) => a - b);
  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.sort((a, b) => a - b);
    // here we are not memoizing function, we are memoizing what it returns that's why we use useMemo 
  }, [items]); 
  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);