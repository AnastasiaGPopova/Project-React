export function errorMessageHandler(errorMessage){

    if(errorMessage.includes("Firebase")){
        const [fire, message] = errorMessage.split("Firebase: ")
        return message
    } else {
        return errorMessage
    }
}

