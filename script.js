function accion(){
    const input = document.querySelector('.input').value;
    if (input <= 576){
        alert('Tu resolución pertenece a la medida xs')
    }
    else if (input <= 768){
        alert('Tu resolución pertenece a la medida sm')
    }
    else if (input <= 962){
        alert('Tu resolución pertenece a la medida md')
    }
    else if (input >= 992){
        alert('Tu resolución pertenece a la medida xl')
    }
}