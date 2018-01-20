function CowAndBull() {
    var secretNumber = [1, 2, 3, 4];
    var playerNumber = [];
    var cow = 0, bull = 0;

    var num = document.forms["form"].elements["number"].value;

    for(var i = 0; i < 4; i++){
        playerNumber[i] = +num.charAt(i);
    }

    for(i = 0; i < 4; i++){
        if(secretNumber[i] == playerNumber[i]) bull++;
    }

    for(var c = 0; c < 4; c++){

        for(var k = 0; k < 4; k++){
            if(secretNumber[c] == playerNumber[k]) cow++;
        }
    }

    alert("Коровы: " + cow + ", Быки: " + bull);
    if(bull == 4){
        alert("Вы победили!");
    }else{
        alert("Повторите ввод.")
    }
}











