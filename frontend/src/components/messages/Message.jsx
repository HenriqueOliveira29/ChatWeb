import {useAuthContext} from "../../context/AuthContext"
import useConversation from "../../store/useConversation";
import { extractTime} from "../../utils/extractTime"

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubleBgColor = fromMe ? "bg-orange-500" : "";
  return (
      <div className={`chat ${fromMe ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={profilePic}
            />
          </div>
        </div>
        <div className={`chat-bubble text-white ${bubleBgColor} pb-2`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{extractTime(message.createdAt)}</div>
      </div>
  );
};

export default Message;
