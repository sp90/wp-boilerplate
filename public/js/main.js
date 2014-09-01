$(function() {


    var snapper = new Snap({
        element: document.getElementById('wrapper'),
        settings: {
            element: null,
            dragger: null,
            disable: 'right',
            addBodyClasses: true,
            hyperextensible: true,
            resistance: 0.5,
            flickThreshold: 50,
            transitionSpeed: 0.3,
            easing: 'ease',
            maxPosition: 266,
            minPosition: -266,
            tapToClose: true,
            touchToDrag: true,
            slideIntent: 40,
            minDragDistance: 5
        }
    });
    // Get the button
    var myToggleButton = document.getElementById('open-left');

    myToggleButton.addEventListener('click', function(){

        if( snapper.state().state=="left" ){
            snapper.close();
        } else {
            snapper.open('left');
        }

    });
});
