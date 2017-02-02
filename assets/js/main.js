$(document).ready(
    function() {  
    }   
);
$('.toggle-day-night-lever').draggable({
    axis: "x",
    containment: "parent",
    stop: function() {
        alert('stop');
    }
});

