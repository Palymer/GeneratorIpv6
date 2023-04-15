const fs = require('fs');

const network = '2a07:14c0:0:2451'; // Введите ваш префикс сети тут
const MAXCOUNT = 5000; // Количество адресов

const array = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f'];
let count = 1;

function rnd_ip_block() {
    const a = `${array[Math.floor(Math.random() * 16)]}${array[Math.floor(Math.random() * 16)]}${array[Math.floor(Math.random() * 16)]}${array[Math.floor(Math.random() * 16)]}`;
    const b = `${array[Math.floor(Math.random() * 16)]}${array[Math.floor(Math.random() * 16)]}${array[Math.floor(Math.random() * 16)]}${array[Math.floor(Math.random() * 16)]}`;
    const c = `${array[Math.floor(Math.random() * 16)]}${array[Math.floor(Math.random() * 16)]}${array[Math.floor(Math.random() * 16)]}${array[Math.floor(Math.random() * 16)]}`;
    const d = `${array[Math.floor(Math.random() * 16)]}${array[Math.floor(Math.random() * 16)]}${array[Math.floor(Math.random() * 16)]}${array[Math.floor(Math.random() * 16)]}`;
    return `${network}:${a}:${b}:${c}:${d}`;
}


let writeStream = fs.createWriteStream('ipv6list.txt'); // Записываем полученные айпи в файл

console.log('-----------------');

while (count <= MAXCOUNT) {
    let ip = rnd_ip_block();
    writeStream.write(`${ip}\n`);
    console.log(ip);
    count++;
}

console.log('-----------------');

console.log(`Создано и записано (${MAXCOUNT} IPv6 адресов) с использованием вашего префикса IPv6:`);
writeStream.end();
