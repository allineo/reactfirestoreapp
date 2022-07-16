import { showFeedback } from './form';
import { feedbackListArray, listRegisters } from "./services/firestore";


function ListFeedback(props) {
    if (feedbackListArray != null) {
        return (<div>
            <h1>FEEDBACKS ENVIADOS</h1>
            <ul>
                {feedbackListArray.map(item => {
                    return <li key={item.id}>
                        {item.name}: <br />
                        &nbsp; &nbsp; {item.message} &nbsp; &nbsp;
                        <button onClick={() => showFeedback(props, item)}>
                            EDITAR
                        </button>
                        <br /><br />
                    </li>
                })}
            </ul>
        </div>);
    } else {
        return (<div>Nenhum feedback cadastrado</div>);
    }
}

export { ListFeedback };

listRegisters();