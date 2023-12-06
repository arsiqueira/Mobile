import React, { useState } from 'react';
import {Calendar, CalendarList,Agenda} from 'react-native-calendars';
import { View, Text, StyleSheet, Image, TouchableOpacity,Button} from 'react-native';
function MyApp() {
  const [selected, setSelected] = useState('');
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };




  return (
    
      <Calendar
        // Customize the appearance of the calendar
        style={styles.containerCalendario}
        // Specify the current date
        current={'2023-12-05'}
        // Callback that gets called when the user selects a day
        onDayPress={day => {
          console.log('selected day', day);
          setSelected(day.dateString);
        }}
        // Mark specific dates as marked
        markedDates={{
          //data configuradas
          '2012-03-01 2012-03-04': {selected: true, marked: true, selectedColor: 'pink'},
          '2012-03-02': {marked: true},
          '2023-06-05': {selected: true, marked: true, selectedColor: 'pink'},
          //onde seleciona a data
          [selected]: {selected: true, disableTouchEvent: true, selectedColor: '#D07B85'}
        }}
      />


  
);
};


export default MyApp;


const styles = StyleSheet.create({
    containerCalendario:{
        marginTop:20,
        borderWidth: 2,
        borderColor: '#E4BBB7',
        borderRadius:20 ,
    }
})