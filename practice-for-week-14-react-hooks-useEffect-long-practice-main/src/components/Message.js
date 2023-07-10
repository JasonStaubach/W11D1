import { useEffect, useState } from "react"

function Message({ size, featherCount }) {
  // useEffect(() => {
  //   console.log('Message', size);
  // },[size])

  const [message, setMessage] = useState();

  const [msgSize,setMsgSize] = useState();

  useEffect(() => {
    if (size === 's') {
      setMsgSize('small')
    } else if (size === 'm') {
      setMsgSize('medium')
    } else if (size === 'l') {
      setMsgSize('large')
    } else if (size === 'xl') {
      setMsgSize('xlarge')
    };

  }, [size]);

  useEffect(() =>{
    if (featherCount <= 0)
      setMessage('Oh my! Your bird is naked!');
    else if (featherCount >= 10) {
      setMessage('Full turkey!');
    } else {
      setMessage('Coming along...');
    }
  }, [featherCount])

  return (
    <div className={`message ${msgSize}`}>
      <p>{message}</p>
    </div>
  );
};

export default Message;