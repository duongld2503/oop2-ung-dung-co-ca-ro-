function Cell(left,top,absolute) {
    this.left = left;
    this.top = top;
    this.absolute = absolute;

    this.setLeft = function (left) {
        this.left = left;
    }
    this.setTop = function (top) {
        this.top = top;
    }
    this.setAbsolute = function () {
        this.absolute = absolute;
    }

    this.getLeft = function () {
        return this.left;
    }
    this.getTop = function () {
        return this.top;
    }
    this.getAbsolute = function () {
        return this.absolute;
    }

    this.style = function (top,left) {
        return '<button id ="'+top+left+'"  style="width: 30px;height: 30px" onclick="change(this.id)"></button>' ;
    }

}

let dem = 0;
function change(x){
    if (dem == 0){
        document.getElementById(x).innerHTML = "X";
        dem++;
    } else if (dem == 1){
        document.getElementById(x).innerHTML = "O";
        dem--;
    }
    thongBao(2);
}


function thongBao(j){
    for (i=0;i<20;i++) {
        if ((arr[i][j] == "X" || arr[i][j] == "O") &&arr[i][j] == arr[i+1][j] &&arr[i][j] == arr[i+2][j] &&arr[i][j] == arr[i+3][j] &&arr[i][j] == arr[i+4][j]){
            alert("you win")
            break;
        }
    }
}

let arr = new Array();
for (i=0;i<20;i++){
    arr[i] = new Array();
    for (j=0;j<20;j++){
        let cell = new Cell(i,j,0)
        arr[i][j] = cell.style(i+'',j+'') ;
    }
    document.getElementById("gameboard").innerHTML += arr[i] + "<br>"
}



