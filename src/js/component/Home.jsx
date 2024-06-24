import React, { useState } from "react";


//include images into your bundle

//create your first component
const Home = () => {
	const [addTask, setAddTask] = useState("");
	const [newTask, setNewTask] = useState([]);
	return (
		<React.Fragment>
			<div className="container text-center">
				<h1>todos</h1>
			</div>
			<ul className="container list-group w-50 shadow p-3 mb-5 bg-body rounded">
				<input type="text"
					onChange={(event) => setAddTask(event.target.value)}
					value={addTask}
					onKeyDown={(event) => {
						if (event.key === "Enter") {
							if
								(addTask.trim() !== "") {
								setNewTask(newTask.concat([addTask.trim()]));
								setAddTask("");
							}
						}
					}
					}
					className="form-control shadow  bg-body rounded px-5"
					placeholder="What needs to be done?"
					aria-label="Username"
				/>
				{newTask.length === 0
					? (<li className="d-flex 
				justify-content-center 
				text-muted list-group-item 
				shadow  
				bg-body rounded px-5"
					>No tasks, add a task</li>
					)
					: (newTask.map((task, index) => (
						<li key={index} className="d-flex justify-content-between list-group-item shadow bg-body rounded px-5">
							{task} {""}
							<span><i className="fa-solid fa-x text-danger delete-icon" onClick={() =>
								setNewTask(newTask.filter(
									(task, currentIndex) =>
										index != currentIndex))
							}></i></span>
						</li>)
					))}
				<div className="text-muted my-1">{newTask.length} tasks</div>
			</ul>
		</React.Fragment >
	);
};

export default Home;
