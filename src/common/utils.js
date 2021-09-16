function diff(date1, date2) {
  var diff = date2 - date1;
  var diffH = Math.floor((diff % 86400000) / 3600000); // 시간
  var diffM = Math.floor(((diff % 86400000) % 3600000) / 60000); // 분
  var diffS = Math.floor((diff / 1000) % 60); // 초

  if (Math.sign(diff) === -1) {
    // 음수 check
    return "퇴근시간이 지났어요...";
  } else {
    return (
      "퇴근시간까지: " +
      [
        diffH < 10 ? "0" + diffH : diffH,
        diffM < 10 ? "0" + diffM : diffM,
        diffS < 10 ? "0" + diffS : diffS,
      ].join(":") +
      "남음"
    );
  }
}

function solution(n) {
  var nowDate = new Date();
  var exitDate = new Date(); // 17:30:00

  var input_arr = n.split(":");

  exitDate.setHours(input_arr[0]);
  exitDate.setMinutes(input_arr[1]);
  exitDate.setSeconds(input_arr[2]);

  return diff(nowDate, exitDate);
}

export { solution };
