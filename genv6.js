const fs = require('fs');
const randomIpv6 = require('random-ipv6');

let prefix = 64; // префикс сети
let numAddresses = Math.pow(2, 128 - prefix);
let addresses = [];
let needHosts = 50000; // Сколько надо адресов
let token = '2a01:4f8:242:4d0d'; // главная часть адреса

// Генератор адресов (в случае, если сеть не 64, то надо подпаравить)
let randomAddress = randomIpv6(`${token}::1`, {
    padded: true,
    tokens:{ 
        min: 0,
        max: 65535
    }
});

// пушим сгенерированный адрес
addresses.push(randomAddress);

// генерируем доп адреса до нужного значения
for (let i = 1; i < numAddresses && addresses.length < needHosts; i++) {
    let newAddress = randomIpv6(`${token}:${i.toString(16).padStart(4, '0')}:1:1:1:1:1:1`, {padded: true});
    addresses.push(newAddress);
}

// пишем в файлик
const fileName = 'ipv6adresses.txt';
fs.writeFile(fileName, addresses.join('\n'), (err) => {
    if (err) throw err;
    console.log(`File with IPv6 addresses saved to ${fileName}!`);
});
