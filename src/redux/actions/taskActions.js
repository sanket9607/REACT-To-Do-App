import axios from 'axios';

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id,
});

export const setTaskPriority = (id, priority) => ({
  type: 'SET_TASK_PRIORITY',
  payload: { id, priority },
});

export const fetchWeather = (city) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
      dispatch({
        type: 'FETCH_WEATHER_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_WEATHER_FAILURE',
        payload: error.message,
      });
    }
  };
};

