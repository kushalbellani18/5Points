# List Group
## Add the given below code must copied to App.js

```
import ListGroup from "./components/ListGroup";

function App() {
	const items = [
		"Item - 1",
		"Item - 2",
		"Item - 3",
		"Item - 4",
		"Item - 5"
	];

	const handleSelectItem = (item) => {
		console.log(item);
	}

	return (
	<>
		<div>
			<ListGroup items={items} heading="List of items" onSelectItem={handleSelectItem} />
		</div>
	</>
	);
}
```
