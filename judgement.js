function get_achievement(x,y,z){
  let sum = x+y+z;
  if(sum>=250){
    return "A";
  }else if(sum>=200){
    return "B";
  }else if(sum>=100){
    return "C";
  } else(sum<=90)
    return "D";
}
console.log(get_achievement(60,80,50));

function get_pass_or_failure(x,y,z){
  if((x,y,z)>=60){
    return "合格";
  }else{
    return " 不合格";
  }
}

function judgement(x,y,z){
  let achievement = get_achievement(x,y,z);
  let pass_or_failure = get_pass_or_failure(x,y,z);
  return `あなたの成績は${achievement}です.${pass_or_failure}です!`;
}
console.log(judgement(60,80,50));