const hasStudentCard = true; // 定数にfalseを代入

if (hasStudentCard === true) { // もし学生証を持って入れば
	console.log("学割適用"); // 条件に合わないので出力されない
} else { // 学生証を持っていなければ
	console.log("学生証がないため割引できません");
}

const userAge = 15;
const minAge = 3; // 3歳~
const maxAge = 25; // 〜25歳

if (hasStudentCard === true) { // もし学生証を持って入れば
	console.log("学割適用");
} else if (userAge >= minAge && userAge <= maxAge) { // 学生証を持っていなくても年齢が条件にあって入れば...
	console.log("学割適用");
} else { // 条件に合わない場合
	console.log("条件に合わないので割引できません");
}