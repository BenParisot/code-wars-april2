console.log('hi');


//Test Walks
const walk1 = ['n','s','n','s','n','s','n','s','n','s']; //true
const walk2 = ['w','e','w','e','w','e','w','e','w','e','w','e']; //false
const walk3 = ['w']; //false
const walk4 = ['n','n','n','s','n','s','n','s','n','s']; //false

function isValidWalk(walk) {
    let x = 0;
    let y = 0;
    //score coordinates
    if(walk[i] === 'n') {
        x++;
    }
    if(walk[i] === 's') {
        x--;
    }
    if(walk[i] === 'e') {
        y++;
    }
    if(walk[i] === 'w') {
        y--;
    }

    //check coordinates

}