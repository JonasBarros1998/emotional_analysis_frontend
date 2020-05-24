import React, {useEffect} from "react";

const MessageComponent = () => {
    useEffect(() => {
        setTimeout(()=> {
            document.location.reload();
        }, 3000);
    });

    return (
        <div class="alert alert-danger" role="alert">
            <strong>Um erro ocorreu!</strong> Não foi possível fazer o processamento dos dados.
        </div>
    )
}

export default MessageComponent;