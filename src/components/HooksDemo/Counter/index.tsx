import React from 'react';
import { Button } from 'antd';

const Counter: React.FC = () => {
  const [count, setCount] = React.useState(0);

  const handleIncement = React.useCallback(() => {
    console.log('handleIncement run...');
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <Button onClick={handleIncement}>+</Button>
    </div>
  );
};
export default Counter;
