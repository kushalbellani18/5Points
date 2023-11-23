import Button from "./components/Button";
import Alert from "./components/Alert";
import {useState} from "react";

function App() {
	const [visibleAlert, setVisibleAlert] = useState(false);
	const handleClick = () => {
		setVisibleAlert(true);
	};

	return (
	<>
		<div>
			{visibleAlert && <Alert onClose={() => {setVisibleAlert(false);} }> Hello </Alert>}
			<Button color="secondary" onClick={handleClick}> Click Me </Button>
		</div>
	</>
	);
}

export default App
