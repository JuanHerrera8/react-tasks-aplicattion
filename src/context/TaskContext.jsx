import { createContext, useEffect, useState } from 'react'
import { fetchTasks, createOneTask, deleteOneTask } from '../data/tasks'

export const TaskContext = createContext()


export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)



  const createTask = async (task) => {
    const newTask = await createOneTask(task)
    setTasks([...tasks, newTask])
  }

  const deleteTask = async (taskId) => {
    await deleteOneTask(taskId)
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const loadTasks = async () => {
    try {
      const taskData = await fetchTasks()
      setTasks(taskData)
      setLoading(false)
    } catch (error) {
      console.error('Error al cargar las tareas:', error)
      setTasks([])
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log("useEfffect context");
    loadTasks()
  }, [])

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        loading,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}
