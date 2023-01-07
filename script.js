fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
.then((data)=>{
    // console.log(data);
    return data.json();
}).then((e)=>{
   
   getData(e);
})

function getData(e){
    console.log(e); 
    let tbody = document.getElementsByClassName('tbody')[0];
    let temp = 0;
    e.forEach(e => {
       
        let table_row = document.createElement('tr');
        table_row.innerHTML = `<td> <img src="${e.image}" alt="" width = '15px' height = '15px'> ${e.name}</td><td>${e.symbol}</td><td> $${e.current_price}</td><td>$${e.circulating_supply}</td><td class = "per">${e.price_change_percentage_24h}%</td><td>Mkt Cap : $${e.market_cap}</td>`;
        tbody.append(table_row);
        if(e.price_change_percentage_24h>0){
            document.getElementsByClassName('per')[temp].style.color = 'blue';
        }else{
            document.getElementsByClassName('per')[temp].style.color = 'purple'; 
        }
        ++temp;
    });
}
