let setUpToolTip = function() {
    let tooltip = "",
    toolTipDiv = document.querySelector(".div-tooltip"),
    toolTipElements = Array.from(document.querySelectorAll(".hover-reveal")),
    timer;

    // let displayToolTip = function(e, obj) {
        let displayToolTip = function(e) {    
        // console.log(obj)
        console.log(this)
        // tooltip = obj.dataset.tooltip;
        tooltip = this.dataset.tooltip;
        toolTipDiv.innerHTML = tooltip;
        toolTipDiv.style.top = e.pageY + "px";
        toolTipDiv.style.left = e.pageX + "px";
        // toolTipDiv.style.opacity = 1;
        fadeIn(toolTipDiv);
    };

    let fadeOut = function(element) {
        var op = 1;
        if (!timer) {
            timer = setInterval(function() {
                if (op <= 0.1) {
                    clearInterval(timer);
                    timer = null;
                    element.style.opacity = 0;
                    element.style.display = 'none';
                }
                element.style.opacity = op;
                op -= op * 0.1;
            }, 10);
        }   
    };

    let fadeIn = function(element) {
        var op = 0.1;
        element.style.display = 'block';
        timer = setInterval(function() {
            if (op >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            op += op * 0.1;
        }, 10);
    };

    // toolTipElements.forEach(function(elem) {
    //     let timeout;
    //     elem.addEventListener("mouseenter", function (e) {
    //         // let that = this;
    //         timeout = setTimeout(function () {
    //         // displayToolTip(e, that);
    //         displayToolTip.call(elem, e);
    //         }, 400)
            
    //     });
    //     elem.addEventListener("mouseleave", function(e) {
    //         // toolTipDiv.style.opacity = 0;
    //         clearTimeout(timeout);
    //         fadeOut(toolTipDiv);
    //     });
    // });
    let bindEvents = function(elem) {
        let timeout;
        elem.addEventListener("mouseenter", function (e) {
            // let that = this;
            timeout = setTimeout(function () {
            // displayToolTip(e, that);
            displayToolTip.call(elem, e);
            }, 400)
            
        });
        elem.addEventListener("mouseleave", function(e) {
            // toolTipDiv.style.opacity = 0;
            clearTimeout(timeout);
            fadeOut(toolTipDiv);
        });
    }

    toolTipElements.forEach(bindEvents);
};

setUpToolTip();