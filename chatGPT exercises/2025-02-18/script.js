const esPar = num => num % 2 === 0
esPar(2)
esPar(28)
esPar(91)

const invertirTexto = str => str.split('').reverse().join('');

invertirTexto('olleh');
invertirTexto('Minecraft');
invertirTexto('Andrés');

const contarVocales = str => {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let vocalNum = 0;
    for (let letra of str.toLowerCase()) {
        if (vocales.includes(letra)) vocalNum++;
    }
    return vocalNum;
};

// const contarVocales = str => (str.match(/[aeiou]/gi) || []).length;

contarVocales('Minecraft')
contarVocales('Hello World, I am Andrew')
contarVocales('Visual Studio Code, NvChad, etcetera')

const numeroMayor = nums => {
    let higher = nums[0];
    for (let num of nums) {
        if (num > higher) higher = num;
    }
    return higher;
};

// const numeroMayor = nums => Math.max(...nums);

numeroMayor([3, 7, 2, 9, 5])
numeroMayor([14, 2, 0, 99.9999999999999999 , 100])
numeroMayor([1, 2, 25, 9, 71])