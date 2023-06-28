import Button from "./components/Button";

function App() {

    return (
        <div>
            <Button color='danger' onClick={() => console.log("clicked")}>Primary button</Button>
        </div>
    )
}

export default App;