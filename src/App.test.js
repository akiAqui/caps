import { render, screen } from '@testing-library/react';
import App, { updateTimes } from './App';

describe("App", () => {
  test('renders learn react link', () => {
    render(<App />);
    screen.debug();
  });
  test('updates status', () => {
    const curState = {
      selectedDate: '2023/07/22',
      availableTimes: [],
      
    };
    const action = {
      type: 'SELECT_DATE',
      date: '2023-07-22',
      times: ['18:00', '19:00', '20:00'],
    }
    const newState = updateTimes(curState, action);

    expect(newState).toEqual({
      selectedDate: '2023-07-22',
      availableTimes: ['18:00', '19:00', '20:00'],
    });

    })
});


