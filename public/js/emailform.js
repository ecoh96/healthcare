function submitForm() {
    let name = document.getElementsByName("name")[0].value;
    let phone = document.getElementsByName("phone")[0].value;
    let message = document.getElementsByName("message")[0].value;

    let body = "고객 이름: " + name + "\n";
    body += "고객 연락처: " + phone + "\n";
    body += "고객 메시지: " + message;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "submit_index.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("name=" + name + "&phone=" + phone + "&message=" + message);

    // 경고창 표시
    alert("입력하신 번호로 영업일 0~1일 이내 전화드릴 예정입니다.");

    return false; // 폼 제출 중지
}
