var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var grid = 16;
var count = 0;

var snake = {
    x: 160,
    y: 160,

    dx: grid,
    dy: 0,

    celdas: [],

    maximoDeCeldas: 4
};
var apple = {
    x: 320,
    y: 320
};


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function loop() {
    requestAnimationFrame(loop);

    if (++count < 10) {
        return;
    }

    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);

    snake.x += snake.dx;
    snake.y += snake.dy;

    if (snake.x < 0) {
        snake.x = canvas.width - grid;
    }
    else if (snake.x >= canvas.width) {
        snake.x = 0;
    }

    if (snake.y < 0) {
        snake.y = canvas.height - grid;
    }
    else if (snake.y >= canvas.height) {
        snake.y = 0;
    }

    snake.celdas.unshift({ x: snake.x, y: snake.y });

    if (snake.celdas.length > snake.maximoDeCeldas) {
        snake.celdas.pop();
    }

    context.fillStyle = '#FA320F';
    context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

    context.fillStyle = '#06E951';
    snake.celdas.forEach(function (cell, index) {

        context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

        if (cell.x === apple.x && cell.y === apple.y) {
            snake.maximoDeCeldas++;

            apple.x = getRandomInt(0, 25) * grid;
            apple.y = getRandomInt(0, 25) * grid;
        }

        for (var i = index + 1; i < snake.celdas.length; i++) {

            if (cell.x === snake.celdas[i].x && cell.y === snake.celdas[i].y) {
                snake.x = 160;
                snake.y = 160;
                snake.celdas = [];
                snake.maximoDeCeldas = 4;
                snake.dx = grid;
                snake.dy = 0;

                apple.x = getRandomInt(0, 25) * grid;
                apple.y = getRandomInt(0, 25) * grid;
            }
        }
    });
}


document.addEventListener('keydown', function (e) {


    if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    }
    else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    }
    else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    }
    else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
    }
});
const desbloquearPantalla = document.getElementById('boton-bloqueo');
let LaPantallaEstaDesbloqueada = true;

desbloquearPantalla.addEventListener('click', () => {
    if (LaPantallaEstaDesbloqueada) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    LaPantallaEstaDesbloqueada = !LaPantallaEstaDesbloqueada;
});


function Reiniciar() {
    var scrollPosition = window.scrollY;

    location.reload();

    setTimeout(function () {
        document.getElementById('snake').scrollIntoView();

        window.scrollTo(0, scrollPosition);
    }, 100);
}
