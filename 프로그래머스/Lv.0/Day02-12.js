// 특정 문자 제거하기
// 문제 설명
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
// my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

//my_string을 얕은복사한다음에 배열에 추가하고, filter함수를 사용해서 letter 걸러주고 join해주었음
function solution(my_string, letter) {
  const arr = [];
  arr.push(...my_string);
  return arr.filter(el => el !== letter).join("");
}

// 간단한풀이
// function solution(my_string, letter) {
//   return my_string.replaceAll(letter, "");
// }
