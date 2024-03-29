import { useEffect, useRef } from "react"
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/MessageSkeleton"
import Message from "./Message"

const Messages = () => {
  const {messages, loading }= useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"})
    }, 100)
    
  }, [messages])

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx}/>)}

      {!loading && messages?.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}

      {!loading && messages?.length > 0 && (
         messages.map((message, idx) => (
         <div key={idx} ref={lastMessageRef}>
          <Message message={message}/>
         </div>))
      )}
     
    </div>
  )
}

export default Messages