import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

// hacer fetch para tasks a un ednpoint
export const fetchTasks = async () => {
  const { data: tasks } = await supabase
    .from('tasks')
    .select('*')

  return tasks
}

// crear una tarea
export const createOneTask = async (task) => {
  const { data } = await supabase
    .from('tasks')
    .insert([
      task,
    ])
    .select()

  return data[0]
}


export const deleteOneTask = async (taskId) => {
  const { data: task } = await supabase
    .from('tasks')
    .delete()
    .eq('id', taskId)
    .select()
  console.log(task, "tareaaa");
  return task
}
