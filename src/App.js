import { Button } from "../src/components/ui/Button";

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Button
        onClick={() => alert("Button clicked!")}
        variant="outline"
        size="lg"
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
