import { useRef } from "react";
import { saveRegister } from "./services/firestore";

let feedbackfield = null;
let namefield = null;

function FeedbackForm(props) {
    feedbackfield = useRef(null);
    namefield = useRef(null);

    return (
        <form onSubmit={saveFeedback}>
            <label>
                Envie-nos seu feedback, dúvidas ou sugestões:<br />
                <textarea cols="50" rows="5" ref={feedbackfield} />
            </label>
            <br /><br />
            <label>
                Seu contato:<br />
                <input type="text" ref={namefield} />
            </label>
            <br /><br />
            <input type="submit" value="ENVIAR" /> &nbsp; &nbsp;
            <button onClick={() => props.setAppMode('home')}>
                INÍCIO
            </button>
        </form>);
}

export { FeedbackForm };

function saveFeedback() {
    const feedback = {
        message: feedbackfield.current.value,
        name: namefield.current.value,
    }
    saveRegister(feedback);
}