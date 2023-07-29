import { fireEvent, render, screen, act, waitFor, getByLabelText, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm.js';
import ReservationContext from './ReservationContext.js';

// Mock useNavigate
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}));

const mockAvailableTimes = {
    date: '2023-07-21',
    times: ['18:00', '20:00', '21:00', '22:00']
};

const mockReservation = {
    date: '2023-07-21',
    time: '',
    guest: '',
    from: '2023-07-21',
    to: '2023-07-28',
    times: ['18:00', '20:00', '21:00', '22:00'],
    isConfirmed: false,
};
const setMockReservation = jest.fn();

describe('BookingForm', () => {


    /* date */
    it('can selects todays Date 7/19 - 1', async () => {
        render(
            <ReservationContext.Provider
                value={{ reservation: mockReservation, setReservation: setMockReservation }}>
                <BookingForm dispatch={jest.fn()} />);
            </ReservationContext.Provider>
        );

        const dateInput = screen.getByLabelText(/Date:/);

        // calendar
        const formattedDate = '2023-07-21';
        fireEvent.change(dateInput, { target: { value: formattedDate } });
        expect(screen.getByDisplayValue(formattedDate)).toBeInTheDocument();
        expect(dateInput.value).toBe(formattedDate);
 
    });



    it('can selects time 18:00 -2 ', async () => {
        const user = userEvent.setup() // まずsetup
        render(
            <ReservationContext.Provider
                value={{ reservation: mockReservation, setReservation: setMockReservation }}>
                <BookingForm dispatch={jest.fn()} />
            </ReservationContext.Provider>
        );

        const formattedDate = '2023-07-21';
        const dateInput = screen.getByLabelText(/Date:/);
        fireEvent.change(dateInput, { target: { value: formattedDate } });
        expect(screen.getByDisplayValue(formattedDate)).toBeInTheDocument();
        expect(dateInput.value).toBe(formattedDate);
        screen.debug();
        
        // すべての combobox 要素を取得
        const allComboboxes = screen.getAllByRole('combobox');
        const timeCombobox = allComboboxes.find((combobox) => combobox.getAttribute('aria-labelledby') === 'lb_time');

        if (!timeCombobox) {
            throw new Error("Couldn't find the time combobox");
        }
        expect(screen.getByRole('option', { name: 'please select' }).selected).toBe(true)

        // userEvent を使ってその要素を選択（ユーザーがクリックしたと同じ効果）
        const option = within(timeCombobox).getByRole('option', { name: "18:00" });
        user.selectOptions(timeCombobox, "18:00");

        expect(option).toBeInTheDocument();
        const errorElm = screen.getByTestId('error');
        expect(errorElm).toBeEmptyDOMElement();
    });




    it('can receives text value in guests - 3', async () => {
        const user = userEvent.setup(); // まずsetup
        render(
            <ReservationContext.Provider value={{ reservation: mockReservation, setReservation: setMockReservation }}>
                <BookingForm dispatch={jest.fn()} />
            </ReservationContext.Provider>
        );
        const guestInput = screen.getByLabelText(/Guests:/);
        await user.type(guestInput, '1');
        expect(guestInput.value).toBe('1')
    });



    it('receives text value in guests - 4', async () => {
        const user = userEvent.setup(); // まずsetup
        render(
            <ReservationContext.Provider value={{ reservation: mockReservation, setReservation: setMockReservation }}>
                <BookingForm dispatch={jest.fn()} />
            </ReservationContext.Provider>
        );
        const guestInput = screen.getByLabelText(/Guests:/);

        // Set input value and blur the field within the act() block
        guestInput.focus();
        user.type(guestInput, '11');
        guestInput.blur();

        // Move the waitFor() call outside of the act() block to ensure the error message check occurs after React finishes its updates
        await waitFor(async () => {
            const error = await screen.findByText(/Error:/);
            expect(error).toBeInTheDocument();
        }, { timeout: 3000 })  // Here, the timeout period is changed to 3000ms
    });


    it('receives text value in guests - 5', async () => {
        const user = userEvent.setup(); // まずsetup
        render(
            <ReservationContext.Provider value={{ reservation: mockReservation, setReservation: setMockReservation }}>
                <BookingForm dispatch={jest.fn()} />
            </ReservationContext.Provider>
        );
        const guestInput = screen.getByLabelText(/Guests:/);

        guestInput.focus();
        user.type(guestInput, 'aa');
        guestInput.blur();

        await waitFor(async () => {
            const error = await screen.findByText(/Error:/);
            expect(error).toBeInTheDocument();
        }, { timeout: 3000 })  // Here, the timeout period is changed to 3000ms
    });

    it('receives text value in guests - 6', async () => {
        const user = userEvent.setup(); // まずsetup
        render(
            <ReservationContext.Provider value={{ reservation: mockReservation, setReservation: setMockReservation }}>
                <BookingForm dispatch={jest.fn()} />
            </ReservationContext.Provider>
        );
        const guestInput = screen.getByLabelText(/Guests:/);

        guestInput.focus();
        user.type(guestInput, '1.11');
        guestInput.blur();
        await waitFor(async () => {
            const error = await screen.findByText(/Error:/);
            expect(error).toBeInTheDocument();
        }, { timeout: 3000 })  // Here, the timeout period is changed to 3000ms
    });

    it('sets occasion - 7', async () => {
        const user = userEvent.setup(); // まずsetup
        render(
            <ReservationContext.Provider value={{ reservation: mockReservation, setReservation: setMockReservation }}>
                <BookingForm dispatch={jest.fn()} />
            </ReservationContext.Provider>
        );
        const occasionInput = screen.getByRole('combobox', { name: /Occasion:/i });

        await user.selectOptions(occasionInput, 'Birthday');
        expect(occasionInput.value).toBe('Birthday');
    });

    it('sets occasion - 7', async () => {
        const user = userEvent.setup(); // まずsetup
        render(
            <ReservationContext.Provider value={{ reservation: mockReservation, setReservation: setMockReservation }}>
                <BookingForm dispatch={jest.fn()} />
            </ReservationContext.Provider>
        );
        const occasionInput = screen.getByRole('combobox', { name: /Occasion:/i });

        await user.selectOptions(occasionInput, 'Anniversary');
        expect(occasionInput.value).toBe('Anniversary');
    });
})

describe('BookingForm scenario tests - 8', () => {
    it('input all the value', async () => {
        const user = userEvent.setup(); // まずsetup
        render(
            <ReservationContext.Provider value={{ reservation: mockReservation, setReservation: setMockReservation }}>
                <BookingForm dispatch={jest.fn()} />
            </ReservationContext.Provider>
        );

        /* date */
        const dateInput = screen.getByLabelText(/Date:/);
        const formattedDate = '2023-07-19';
        fireEvent.change(dateInput, { target: { value: formattedDate } });

        // すべての combobox 要素を取得
        const allComboboxes = screen.getAllByRole('combobox');
        const timeCombobox = allComboboxes.find((combobox) => combobox.getAttribute('aria-labelledby') === 'lb_time');

        if (!timeCombobox) {
            throw new Error("Couldn't find the time combobox");
        }
        expect(screen.getByRole('option', { name: 'please select' }).selected).toBe(true)

        // userEvent を使ってその要素を選択（ユーザーがクリックしたと同じ効果）
        const option = within(timeCombobox).getByRole('option', { name: "18:00" });
        await user.selectOptions(timeCombobox, "18:00");

        expect(option).toBeInTheDocument();
        const errorElm = screen.getByTestId('error');
        expect(errorElm).toBeEmptyDOMElement();


        /* guests */
        const guestInput = screen.getByLabelText(/Guests:/);
        guestInput.focus();
        await user.type(guestInput, '5');
        expect(guestInput.value).toBe('5');

        /* occasion */
        const occasionInput = screen.getByRole('combobox', { name: /Occasion:/i });
        await user.selectOptions(occasionInput, 'Birthday');
        expect(screen.getByRole('option', { name: 'Birthday' }).selected).toBe(true);

        /* button */
        const submitButton = screen.getByRole('button');
        user.click(submitButton);

        expect(errorElm).toBeEmptyDOMElement();

    })

});