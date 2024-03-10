let styleButton = document.getElementById('numbutton');

let headCh = document.getElementById('headerchange');
let footCh = document.getElementById('footerchange');
let sCh = document.getElementById('schange');
let mainCh = document.getElementById('coloredMain');

function changeStyle() {
    let currentColor = headCh.style.backgroundColor;
    if (currentColor === 'rgb(249, 28, 0)') {
        headCh.style.backgroundColor = 'green';
    } else {
        headCh.style.backgroundColor = 'rgb(249, 28, 0)';
    };

    let footerColor = footCh.style.backgroundColor;
    if (footerColor === 'rgb(185, 29, 0)') {
        footCh.style.backgroundColor = 'green';
    } else {
        footCh.style.backgroundColor = 'rgb(185, 29, 0)';
    };

    let sColor = sCh.style.color;
    if (sColor === 'rgb(0, 237, 123)') {
        sCh.style.color = 'orange';
    } else {
        sCh.style.color = 'rgb(0, 237, 123)';
    };

    let mainColor = mainCh.style.backgroundColor;
    if (mainColor === 'rgba(249, 28, 0, 0.1)') {
        mainCh.style.backgroundColor = 'rgba(255, 165, 0, 0.1)';
    } else {
        mainCh.style.backgroundColor = 'rgba(249, 28, 0, 0.1)';
    };
    
};

styleButton.onclick = changeStyle;