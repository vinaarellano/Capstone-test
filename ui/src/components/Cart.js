import { Button } from '@mui/material';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const Cart = () => {
 
  const [selectedDate, setSelectedDate] = useState(dayjs('2023-07-21'));
  const [selectedTime, setSelectedTime] = useState('');

  const handleAddToCart = () => {
    console.log('Date:', selectedDate.format('YYYY-MM-DD'));
    console.log('Time:', selectedTime);
  };
  return (
    <div id="packagemenu">
      <h2>Rates</h2>
        <ul>
          <li>
            <span className="Rate">Band rehearsal</span>
            <span className="Price">₱300 per hour</span>
            <span className="Description">Inclusion of 2 guitars, 1 bass guitar, 1 drumset.</span>
            <div>
              <div className='add2Cart'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={[
                      'DatePicker',
                      'TimePicker',
                    ]}
                  >
                    <DemoItem label="Date">
                      <DatePicker defaultValue={dayjs('2023-07-21')} value={selectedDate}
                                  onChange={(date) => setSelectedDate(date)}/>
                    </DemoItem>
                    <DemoItem label="Time">
                      <TimePicker defaultValue={dayjs('2022-04-17T15:30')} value={selectedTime}
                                  onChange={(time) => setSelectedTime(time)}/>
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
                <Button  onClick={handleAddToCart} >Add to Cart</Button>
                <p>Selected Time: {selectedTime}</p>
              </div>
            </div>
          </li>
          <li>
            <span className="Rate">Recording</span>
            <span className="Price">₱600 per hour</span>
            <span className="Description">This is live recording. All instruments recorded together.</span>
            <div className='add2Cart'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={[
                      'DatePicker',
                      'TimePicker',
                    ]}
                  >
                    <DemoItem label="Date">
                      <DatePicker defaultValue={dayjs('2023-07-21')} value={selectedDate}
                                  onChange={(date) => setSelectedDate(date)}/>
                    </DemoItem>
                    <DemoItem label="Time">
                      <TimePicker defaultValue={dayjs('2022-04-17T15:30')} value={selectedTime}
                                  onChange={(time) => setSelectedTime(time)}/>
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
                <Button  onClick={handleAddToCart} >Add to Cart</Button>
                <p>Selected Time: {selectedTime}</p>
              </div> 
          </li>
          <li>
            <span className="Rate">Track recording</span>
            <span className="Price">₱1200 per hour</span>
            <span className="Description">Instruments and vocals are recorded individually.</span>
            <div className='add2Cart'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={[
                      'DatePicker',
                      'TimePicker',
                    ]}
                  >
                    <DemoItem label="Date">
                      <DatePicker defaultValue={dayjs('2023-07-21')} value={selectedDate}
                                  onChange={(date) => setSelectedDate(date)}/>
                    </DemoItem>
                    <DemoItem label="Time">
                      <TimePicker defaultValue={dayjs('2022-04-17T15:30')} value={selectedTime}
                                  onChange={(time) => setSelectedTime(time)}/>
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
                <Button  onClick={handleAddToCart} >Add to Cart</Button>
                <p>Selected Time: {selectedTime}</p>
              </div>  
          </li>
          <li>
            <span className="Rate">Lessons</span>
            <span className="Price">₱500 per hour</span>
            <span className="Description">1-on-1 session for voice, guitar, bass, drums and piano lessons</span>
            <div className='add2Cart'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={[
                      'DatePicker',
                      'TimePicker',
                    ]}
                  >
                    <DemoItem label="Date">
                      <DatePicker defaultValue={dayjs('2023-07-21')} value={selectedDate}
                                  onChange={(date) => setSelectedDate(date)}/>
                    </DemoItem>
                    <DemoItem label="Time">
                      <TimePicker defaultValue={dayjs('2022-04-17T15:30')} value={selectedTime}
                                  onChange={(time) => setSelectedTime(time)}/>
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
                <Button  onClick={handleAddToCart} >Add to Cart</Button>
                <p>Selected Time: {selectedTime}</p>
              </div> 
          </li>
        </ul>         
    </div>
  );
};

export default Cart;