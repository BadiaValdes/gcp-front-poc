import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

type toastStatus = "info" | "warning" | "success" | "error" | "loading"  

export const useNotifications = () => {
  const toast = useToast()
  const notify = useCallback(
      (message:string, status:toastStatus, duration=3000) => {        
        toast({
          title: message,
          status,
          duration,
          isClosable: true,
        });
      },
      [toast]
    );
  
    return {notify};
}
