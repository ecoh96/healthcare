
function submitForm() {
  // 고객이 입력한 정보 가져오기
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // 이메일 본문 생성
  var body = "고객 이름: " + name + "\n";
  body += "고객 연락처: " + phone + "\n";
  body += "고객 메시지: " + message;

  alert("입력하신 번호로 영업일 0~1일 이내 전화드릴 예정입니다.");

  // 이메일 보내기
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "submit_index.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send("name=" + name + "&phone=" + phone + "&message=" + message);

}