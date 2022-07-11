import { feedbackListArray, listRegisters } from "./services/firestore";


function ListFeedback() {
    if (feedbackListArray != null) {
        return (<div>
            <h1>FEEDBACKS ENVIADOS</h1>
            <ul>
                {feedbackListArray.map(item => {
                    return <li key={item.id}>
                        {item.data.name}: <br/>
                        &nbsp; &nbsp; {item.data.message}
                        <br/><br/>
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