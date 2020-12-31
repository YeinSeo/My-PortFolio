var currentContent = 0;
const right = document.getElementsByClassName("content-btn-right"); //오른쪽 버튼
const left = document.getElementsByClassName("content-btn-left"); //왼쪽 버튼


document.addEventListener('click', function (event) {
    if (event.target.matches('.content-btn-left')) {
        if (currentContent === 0) {
            currentContent = 0;
        } else {
            currentContent -= 1;
        }
        document.querySelector('.content1').style.display = 'flex'
        document.querySelector('.content2').style.display = 'none'
        document.querySelector('.content1').style.width = '50%'
    } else if (event.target.matches('.content-btn-right')) {
        if (currentContent === 1) {
            currentContent = 1;
        } else {
            currentContent += 1;
        }
        document.querySelector('.content1').style.display = 'none'
        document.querySelector('.content2').style.display = 'flex'
        document.querySelector('.content2').style.width = '50%'
    }
});