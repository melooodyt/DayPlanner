$("#schedule").jqs({
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
hour: 24,
day: 0,
increment: [
    "12 AM", "12 PM"
]
})
function manageSelection(){
    if (user.currentView == package.scheduleView.Day) {
        arguments.cancel = true;
        var start = arguments.startTime;
        var end = arguments.endTime;
        while(start<end){
            user.timetable.dates.add(start);
            start = p.DateTime.addTimes;
        }
    }
}