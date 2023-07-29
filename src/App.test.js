import { render, screen, act, getByLabelText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, { updateTimes } from './App';

describe("App", () => {
  test('renders learn react link', () => {
    render(<App />);
    screen.debug();
  });
  test('long scenario',()=>{
    const user = userEvent.setup();
    render(<App/>)
    const button = screen.getAllByRole('button');
    user.click(button[0]);
  })

  test('updates status', () => {
    const curState = {
      date: '',
      availableTimes: [],

    };

    let newState;
    act(() => {
      const action = {
        type: 'Set_Date',
        date: '2023-07-27',
        times: [],
      }
      newState = updateTimes(curState, action);
    })

    expect(newState).toEqual({
      date: '2023-07-27',
      availableTimes: [],
    });

  })

  test('updates status', () => {
   
   
    let newState;
    act(() => {
     dispatch( {
      Type: 'Set_Date',
      date: '2023-07-21',
    });
    })

    expect(newState).toEqual({
      date: '2023-07-27',
      availableTimes: [],
    });

  })
});


