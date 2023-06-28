import Button from "./components/Button";

function App() {

    return (
        <div>
            <Button onClick={() => console.log("clicked")}>Primary button</Button>
        </div>
    )
}

export default App;