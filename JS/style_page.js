//스크롤 애니메이션
function scrollTo(element, dir) {
    console.log('floating')
    console.log(event)
    console.log(event.target)

    if(dir == "up") {
        dir = element.offsetTop;
    } else {
        dir = element.offsetHeight;
    }
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: dir
    });
}  
function floatingUp(event){
    var body = document.getElementsByTagName("body")[0];
    scrollTo(document.getElementsByTagName("body")[0], "up");
}
function floatingDown(event){
    var body = document.getElementsByTagName("body")[0];
    scrollTo(document.getElementsByTagName("body")[0], "down");
}