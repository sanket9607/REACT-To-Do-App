import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import TaskItem from './TaskItem';
import { fetchWeather } from '../redux/actions/taskActions';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const WeatherInfo = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
`;

function TaskList() {
  const tasks = useSelector(state => state.tasks.tasks);
  const weather = useSelector(state => state.tasks.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather('London')); // You can change this to the user's location
  }, [dispatch]);

  return (
    <div>
      {weather && (
        <WeatherInfo>
          <h3>Current Weather in {weather.name}</h3>
          <p>{weather.main.temp}°C, {weather.weather[0].description}</p>
        </WeatherInfo>
      )}
      <List>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </List>
    </div>
  );
}

export default TaskList;

