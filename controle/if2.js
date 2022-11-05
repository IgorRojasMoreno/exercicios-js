function teste1(num){
    if(num>7)
    console.log(num)
    console.log('final')/* está sentença sempre será executada,
                           não está vinculada ao IF*/
}
teste1(6)
teste1(8)

function teste2(num){
if(num > 7); {//cuidado com o ';', não usar com as estruturas de contro como if e else
    console.log(num)
}
}

teste2(6)
teste2(8)