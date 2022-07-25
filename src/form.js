import { useRef } from "react";
import { saveRegister } from "./services/firestore";

let feedbackfield = null;
let namefield = null;

let feedbackItem = {};

function FeedbackForm(props) {
    feedbackfield = useRef(null);
    namefield = useRef(null);

    return (
        <form onSubmit={saveFeedback}>
            <label>
                Envie-nos seu feedback, dúvidas ou sugestões:<br />
                <textarea cols="50" rows="5" ref={feedbackfield} defaultValue={feedbackItem.message} />
            </label>
            <br /><br />
            <label>
                Seu contato:<br />
                <input type="text" ref={namefield} defaultValue={feedbackItem.name} />
            </label>
            <br /><br />
            <input type="submit" value="ENVIAR" /> &nbsp; &nbsp;
            <button onClick={() => props.setAppMode('home')}>
                INÍCIO
            </button>
        </form>);
}


function showFeedback(props, item) {
    feedbackItem = item;
    props.setAppMode('form');
}

export { FeedbackForm, showFeedback };

function saveFeedback() {
    const feedback = {
        name: namefield.current.value,
        message: feedbackfield.current.value,
    }
    saveRegister(feedback, feedbackItem.id);
}