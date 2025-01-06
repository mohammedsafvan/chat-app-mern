import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../components/skeleton/MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lasMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lasMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="overflow-auto flex-1 px-4">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lasMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3).map((_, idx) => <MessageSkeleton key={idx} />)]}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a messge to start the conversation!</p>
      )}
    </div>
  );
};

export default Messages;
