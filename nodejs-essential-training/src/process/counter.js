let count = 0;

export const add = () => {count++};

export const getCount = () => {return count};


add();
add();
add();
console.log(`total value is ${getCount()}`)