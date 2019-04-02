console.log('hi');


//Test Walks
const walk1 = ['n','s','n','s','n','s','n','s','n','s']; //true
const walk2 = ['w','e','w','e','w','e','w','e','w','e','w','e']; //true
const walk3 = ['w']; //false
const walk4 = ['n','n','n','s','n','s','n','s','n','s']; //false
const walk5 = ['n', 'e', 's', 'w'];

function isValidWalk(walk) {
    let x = 0;
    let y = 0;

    const testWalk = walk.slice(0, 10);
    console.log(testWalk);

    walk.forEach(function(direction) {
        if(direction === 'n') {
            x += 1;
        }
        else if(direction === 's') {
            x += -1;
        }
        else if(direction === 'e') {
            y += 1;
        }
        else {
            y += -1;
        }
    });    
    
    if(x === 0 && y === 0) {
        return true;
    }
    else {
        return false;
    }
}

isValidWalk(walk5);

if(walk.length === 10) {
    walk.forEach(function(direction) {
        if(direction === 'n') {
            x += 1;
        }
        else if(direction === 's') {
            x += -1;
        }
        else if(direction === 'e') {
            y += 1;
        }
        else {
            y += -1;
        }
    });    
  }