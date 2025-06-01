import path from 'node:path';

import fs from 'node:fs/promises';

const f1 = async () => {


const fileContent = await fs.readFile(path.join('src','a.txt'));


console.log(fileContent);
console.log(fileContent.toString("utf-8"));
};

f1().then (console.log(1));
