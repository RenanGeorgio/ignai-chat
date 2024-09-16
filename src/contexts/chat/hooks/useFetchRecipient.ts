import { getChat } from "../../../controllers/chat";
import { useState, useEffect } from "react";
// import { baseUrl, getRequest } from "services/api/apiService";

export default (chat: any, user: any) => {
  const [recipientUser, setRecipientUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  // verificar se está renderizando multiplas vezes
  const recipientId = chat?.members?.find((id: string) => id !== user?.companyId);
  console.log(chat)
  console.log(recipientId)
  useEffect(() => {
    const fetchRecipient = async () => {
      if(!recipientId) return;
      try {
        const response = await getChat(`/chat/client/${recipientId}`);


        // console.log(
        //   `fetchRecipient: ${JSON.stringify(response)}`
        // )
        if(!response) {
          return setError('User not found');
        } else {
          setRecipientUser({...response.data, origin: chat.origin.platform});
        }
      } catch (error) {
        console.log(error)
      }
    };
    fetchRecipient();
  }, [recipientId, chat])
  return { recipientUser , error };
};