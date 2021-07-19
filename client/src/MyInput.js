import React, { useState } from 'react';
const MyInput = ({ chatting, setChatting, socket, room, nickname, message }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const msg_send = () => {
    socket.emit('send', room, nickname, value);

    setChatting((prev) => [...prev, `나 : ${value}`]);
    setValue('');
  };

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={msg_send}>제출</button>
    </div>
  );
};

export default React.memo(MyInput);
