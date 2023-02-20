function nowNumTime(){
  var now = newDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var temp = '' + (hour > 12 ? ':0' : ':');
  if(hour === 0){
    temp = 12;
  }
  temp = temp + (minute < 10 ? ':0' : ':');
  temp = temp + (second < 10 ? ':0' : ':');
  temp = temp + (hour >12 ? 'PM' : 'AM');
  return temp;
}
console.log(temp);