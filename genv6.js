const fs = require('fs');
const randomIpv6 = require('random-ipv6');

let prefix = 64;
let numAddresses = Math.pow(2, 128 - prefix);
let needHosts = 50000;
let mainBlock = '2a01:4f8:242:4d0d';
let addresses = [];

// Function to replace tokens in mainBlock with random numbers
function randomAddress() {
  return randomIpv6(`${mainBlock}:{token}:{token}:{token}:{token}`, {
    padded: true,
    tokens:{ 
        min: 0,
        max: 65535
    }
  });
}

for (let i = 0; i < needHosts; i++) {
  addresses.push(randomAddress());
}

const fileName = 'ipv6adresses.txt';

fs.writeFile(fileName, addresses.join('\n'), (err) => {
  if (err) throw err;

  console.log(`File with IPv6 addresses saved to ${fileName}!`);
});
