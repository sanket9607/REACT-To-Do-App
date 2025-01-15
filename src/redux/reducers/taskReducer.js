const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  weather: null,
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return { ...state, tasks: newTasks };
    case 'DELETE_TASK':
      const updatedTasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return { ...state, tasks: updatedTasks };
    case 'SET_TASK_PRIORITY':
      const priorityTasks = state.tasks.map(task =>
        task.id === action.payload.id ? { ...task, priority: action.payload.priority } : task
      );
      localStorage.setItem('tasks', JSON.stringify(priorityTasks));
      return { ...state, tasks: priorityTasks };
    case 'FETCH_WEATHER_SUCCESS':
      return { ...state, weather: action.payload, error: null };
    case 'FETCH_WEATHER_FAILURE':
      return { ...state, weather: null, error: action.payload };
    default:
      return state;
  }
};

export default taskReducer;

