const tombol = document.querySelector('.container-tombol');
const layer = document.querySelector('#layer');

tombol.addEventListener('click', (e) => {
    const click = e.target;
    const value = click.innerText; 
    if (value == 'C' ) {
        layer.value = ''
    } else if (value == '<' ) {
        layer.value = layer.value.slice(0, -1)
    } else if (value == '=' ) {
        layer.value = eval(layer.value)
    }else {
        layer.value = layer.value + value;
    }
    
})