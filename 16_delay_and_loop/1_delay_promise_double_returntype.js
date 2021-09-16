const data = Promise.resolve('2020 bmw');

function sleeper(ms) {
    return function(x) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}

//หรือจะใช้แบบย่อแทน function แบบด้านบนก็ได้
//const sleeper = ms => () => new Promise(resolve => setTimeout(resolve, ms))

function after_sleeper(x){
    console.log('after sleep : '+x);
}

data.then(sleeper(5000)).then(after_sleeper)