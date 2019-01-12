window.onload = function() {

    var boxes = document.getElementsByClassName("box");

    var createNewBox = function() {
        var newDiv = document.createElement('button');
        newDiv.className = 'box';
        newDiv.innerText = boxes.length+1;
        newDiv.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        return newDiv;
    }

    var myFunction = function() {
        var parent = this.parentNode;
        var newDiv = createNewBox();
        
        parent.appendChild(newDiv);
        console.log("appended");
        update();
    };


    var update = function() {
        boxes = document.getElementsByClassName("box");
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener('click', myFunction, false);
        }
    }
    
    update();

    var triangles = document.getElementsByClassName("tri");

    var spin = function(event) {
        var targetElement = event.target || event.srcElement;
        var parent = targetElement.parentNode;
        var triangleSpin = "tri-spin";
        if(!parent.className.includes(triangleSpin)) {
            parent.className += " " + triangleSpin;
            parent.style.webkitAnimationPlayState = 'running';
        } else {
            if (parent.style.webkitAnimationPlayState === 'running') {
                parent.style.webkitAnimationPlayState = 'paused';
            } else {
                parent.style.webkitAnimationPlayState = 'running';
                document.body.className = '';
            }
        }
    }

    for (let i = 0; i < triangles.length; i++) {
        triangles[i].addEventListener('click', spin, false);
        console.log("Triangle marked");
    }

    var card = document.querySelector('.card');
    $('.flip').click(function () {
        if(card) {
            card.classList.toggle('is-flipped');
            console.log("flippeding")
        }
    });


    var cube = document.querySelector('.cube');
    var radioGroup = document.querySelector('.radio-group');
    var currentClass = '';

    function changeSide() {
        var checkedRadio = radioGroup.querySelector(':checked');
        var showClass = 'show-' + checkedRadio.value;
        if ( currentClass ) {
            cube.classList.remove( currentClass );
        }
        cube.classList.add( showClass );
        currentClass = showClass;
    }
    // set initial side
    changeSide();

    radioGroup.addEventListener( 'change', changeSide );

    $('.display').click(function() {
        $('.nav').toggle();
        $('.display').toggle();
    });

    // $('.nav-show').click(function() {
    //     $('.nav').show();
    //     $(this).hide();
    // });
    
};