const colors = ['red', 'green', 'aqua', 'pink', 'blue', 'yellow', '#336cc6', '#33c6ae', '#c6a433', '#c633b5'];
selecredColor = 0;

let ball = document.getElementById('ball');

ball.addEventListener('click', handleClick)
function handleClick(event) {
    if(selecredColor > 9) selecredColor = 0;
    let time = 1500;
    let addDiv  = document.createElement('div'),
        mValue  = Math.max(this.clientWidth, this.clientHeight),
        rect    = this.getBoundingClientRect();
        sDiv    = addDiv.style,

    sDiv.width  = sDiv.height = mValue + 'px';
    sDiv.left  = event.clientX - rect.left - (mValue / 2) + 'px';
    sDiv.top   = event.clientY - rect.top - (mValue / 2) + 'px';

    ball.classList.add('bounce');
    addDiv.className = 'wave';

    setTimeout(() => {
        addDiv.className = '';
        addDiv.className = 'wave';
        ball.classList.remove('bounce');
    }, time);

    addDiv.style.backgroundColor = colors[selecredColor];
    
    selecredColor++;
    this.appendChild(addDiv);
}

