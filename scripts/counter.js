'use strict';

const count = arr => {
  return new Set(arr).size;
}

console.log(`Уникальных IP-адресов: ${count(listIPv4)}`);
