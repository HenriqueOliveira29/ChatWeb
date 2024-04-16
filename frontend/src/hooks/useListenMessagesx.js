import {useEffect} from 'react'
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../store/useConversation';

export const useListenMessagesx = () => {
    const {socket}= useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
        setMessages([...messages, newMessage])
    });

    return () => socket?.off("newMessage")
    }, [socket, setMessages, messages])
}
