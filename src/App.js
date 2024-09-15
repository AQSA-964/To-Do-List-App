import React, { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";

function App() {
	const [inputList, setInputList] = useState("");
	const [Items, setItems] = useState([]);

	const handleInputChange = (event) => {
		setInputList(event.target.value);
	};

	const handleAddItem = () => {
		setItems((oldItems) => {
			if (inputList === "") {
				return oldItems;
			} else {
				return [...oldItems, inputList];
			}
		});
		setInputList("");
	};

	const deleteItems = (id) => {
		setItems((oldItems) => {
			return oldItems.filter((arrElem, index) => {
				return index !== id;
			});
		});
	};

	return (
		<div className="section">
			<div className="mini-sec">
				<br />
				<h1>To-Do List</h1>
				<br />
				<input
					type="text"
					placeholder="Add an Item"
					onChange={handleInputChange}
					value={inputList}
				/>
				<button onClick={handleAddItem}>
					<i className="fa-solid fa-plus" style={{ color: "white" }}></i>
				</button>
				<br />
				<ol>
					{Items.map((itemval, index) => {
						return (
							<Todolist
								key={index}
								id={index}
								text={itemval}
								onSelect={deleteItems}
							/>
						);
					})}
				</ol>
			</div>
		</div>
	);
}

export default App;
