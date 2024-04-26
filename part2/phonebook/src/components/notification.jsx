const Notification = ({ message: { text, type } }) => {
  if (!text) {
    return null;
  }

  return <div className={`message ${type}`}>{text}</div>;
};
export default Notification;
