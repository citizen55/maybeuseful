/* 
 * lever.js
 * implement drag and drop for lever
 */
document.addEventListener("DOMContentLoaded", leverHandler);

function leverHandler(e) {
    let lever = {};
    let mouse = {};
    
    lever.dom = document.getElementById("lever");
    lever.parent = lever.dom.parentNode;
    lever.box = lever.dom.getBoundingClientRect();
    lever.x = lever.beginX = lever.dom.offsetLeft;
    lever.parentBox = lever.parent.getBoundingClientRect();
    lever.parentWidth = lever.parentBox.width - lever.beginX - lever.box.width;
    lever.dom.addEventListener("mousedown", drag, false);

    function drag(e) {
        document.addEventListener("mouseup", drop, false);
        document.addEventListener("mousemove", move, false);
        //выключаем drag and drop браузера
        lever.dom.ondragstart = function () {
            return false;
        };
        mouse.prevX = e.pageX;
    }

    function move(e) {
        mouse.curX = e.pageX;
        let offsetX = mouse.curX - mouse.prevX;
        mouse.prevX = mouse.curX;
        let tempX = lever.x + offsetX;
        if (tempX < lever.parentWidth && tempX > lever.beginX) {
            lever.x += offsetX;
            lever.dom.style.left = lever.x + "px";
        }
    }

    function drop(e) {
        document.removeEventListener("mousemove", move, false);
        document.removeEventListener("mouseup", drop, false);
        lever.dom.style = '';
        lever.dom.classList.toggle('night');
        document.body.classList.toggle('night');
    }
}
   




