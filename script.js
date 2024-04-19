let cotacaoUsd = 1;
let cotacaoBtc = 1;
const usd = document.getElementById('usd');
const brl = document.getElementById('brl');
const btc = document.getElementById('btc');

function converter(valor, preco){
    return (valor * preco ).toFixed(4)
}

function changeUsd(){
    let value = usd.value;
    value = parseFloat(value).toFixed(4)
    brl.value = converter(value, cotacaoUsd);
    btc.value = converter(brl.value, 1 / cotacaoBtc);
}

function changeBtc(){
    let value = btc.value;
    value = parseFloat(value).toFixed(4)
    brl.value = converter(value, cotacaoBtc);
    usd.value = converter(brl.value, 1 / cotacaoUsd);
}

function getCotacao(){
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,BTC-BRL')
    .then   (response =>{
        return response.json()
    }).then(data =>{
        cotacaoUsd = data.USDBRL.bid
        cotacaoBtc = data.BTCBRL.bid
    }).catch(error =>{
        alert(error)
    })
}

function changeBrl(){
    let value = brl.value;
    value = parseFloat(value).toFixed(4)
    usd.value = converter(value, 1 / cotacaoUsd);
    btc.value = converter(value, 1 / cotacaoBtc);
}

usd.addEventListener('change', () => {
    changeUsd()
})

brl.addEventListener('change', () =>{
    changeBrl()
})
btc.addEventListener('change', () =>{
    changeBtc()
})
getCotacao()