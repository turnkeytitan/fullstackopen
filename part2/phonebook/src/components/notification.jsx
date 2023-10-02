const Notification = ({ message: { text, type } }) => {
  console.log('text',text);
  if (!text) {
    return null;
  }

  return <div className={`message ${type}`}>{text}</div>;
};
export default Notification;
