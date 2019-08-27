var turn = 0;
var count = 0;
var wincheck = 0;
var matr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

function background(id, first, second) {

    let a = document.getElementById(id);
    style = a.style;


    if (style.background == '') count++;
    if (count == 9 && wincheck == 0) alert('draw');

    if (style.background == '') {
        if (turn == 0) {
            style.background = 'url(img/X.png)';
            turn++;
            matr[first][second] = 1;
        } else {
            style.background = 'url(img/O.png)';
            turn--;
            matr[first][second] = 2;
        }
    }
    style.backgroundSize = '150px 140px';









    for (i = 0; i < 3; i++) {


        if (matr[i][0] == 1 && matr[i][1] == 1 && matr[i][2] == 1) {
            alert('X wins the round');
            wincheck++;
        }
        if (matr[i][0] == 2 && matr[i][1] == 2 && matr[i][2] == 2) {
            alert('O wins the round');
            wincheck++;
        }


        if (matr[0][i] == 1 && matr[1][i] == 1 && matr[2][i] == 1) {
            alert('X wins the round');
            wincheck++;
        }
        if (matr[0][i] == 2 && matr[1][i] == 2 && matr[2][i] == 2) {
            alert('O wins the round');
            wincheck++;
        }


        if (matr[0][0] == 1 && matr[1][1] == 1 && matr[2][2] == 1) {
            alert('X wins the round');
            wincheck++;
            break;
        }
        if (matr[0][0] == 2 && matr[1][1] == 2 && matr[2][2] == 2) {
            alert('O wins the round');
            wincheck++;
            break;
        }


        if (matr[0][0] == 1 && matr[1][1] == 1 && matr[2][2] == 1) {
            alert('X wins the round');
            wincheck++;
            break;
        }
        if (matr[0][0] == 2 && matr[1][1] == 2 && matr[2][2] == 2) {
            alert('O wins the round');
            wincheck++;
            break;
        }


        if (matr[2][0] == 1 && matr[1][1] == 1 && matr[0][2] == 1) {
            alert('X wins the round');
            wincheck++;
            break;
        }
        if (matr[2][0] == 2 && matr[1][1] == 2 && matr[0][2] == 2) {
            alert('O wins the round');
            wincheck++;
            break;
        }
    }

};

function Clear() {
    let a = document.getElementsByClassName('cell');
    for (i = 0; i < a.length; i++) {
        style = a[i].style;
        style.background = '';
    }
    turn = 0;
    counter = 0;
    wincheck = 0;
    matr = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

}