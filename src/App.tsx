import Button from "./components/Button";
import Alert from "./components/Alert";
import {useState} from "react";

function App() {
    const [alertVisible, setAlertVisible] = useState(false);

    return (
        <div>
            {alertVisible && <Alert onClose={() => setAlertVisible(false)}>Danger!</Alert>}
            <Button color='danger' onClick={() => setAlertVisible(true)}>Primary button</Button>
        </div>
    )
}

export default App;