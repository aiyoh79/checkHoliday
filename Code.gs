function myFunction() {
  var checkDate = new Date('2021-01-01');
  if( holiday(checkDate) == 1){
    Logger.log(checkDate + " is holiday");
  }
  else{
    Logger.log(checkDate + " is not holiday");
  }
}

function holiday(dateToCheck) {
  // This function can help check whether the date you enter is public holiday
  // This is based on Google holiday calander, however, Google does not follow Minstry of Manpower (MOM) published public holiday, 
  // therefore an exclusion list is created to filter out those holiday not listed in MOM list.
  // special holiday should not be included, example, polling day
  
  //var cal = CalendarApp.getCalendarById("en.singapore#holiday@group.v.calendar.google.com");
  var cal = CalendarApp.getCalendarsByName("Holidays in Singapore");
  // exclusion list of holidays which are not part of MOM published public holiday
  const nonHolidayArray = ["Christmas Eve","New Year's Eve","Children's Day","Easter Saturday","Easter Sunday"];
  //var holidays = cal.getEventsForDay(dateToCheck);
  var holidays = cal[0].getEventsForDay(dateToCheck);
  
  var isHoliday = 0;
  // if there is only one holiday per day  
  if (holidays.length >= 1){
    for (i = 0; i < holidays.length; i ++){
      var eventTitle = holidays[i].getTitle();
      // if the title is not in the exclusion list, then is holiday 
      if ( nonHolidayArray.indexOf(eventTitle) == -1 ){
        isHoliday = 1;
      }
    }
  }
  return isHoliday;
}
