import { useEffect, useState } from 'react'
import { tasks as data } from './tasks'

function TaskList() {
	const [tasks, seTtasks] = useState([])

	useEffect(() => {
		seTtasks(data)
	}, [])
	if (tasks.length === 0) {
		return <h1>No hay tareas aun</h1>
	}

	return (
		<div>
			{tasks.map((task) => (
				<div key={task.id}>
					<h1>{task.title}</h1>
					<p>{task.description}</p>
				</div>
			))}
		</div>
	)
}

export default TaskList
