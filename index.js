let victories = parseInt(prompt('Enter ther number of wins you obtained:'));
let defeats = parseInt(prompt('Enter ther number of defeats you obtained:'));

let winningBalance = victories - defeats;
let lvl;

let rankHero = (balance) => {
    if(balance <= 10 ){
        lvl = 'Iron';
    };
    
    if(balance >= 11 && balance <= 20 ){
        lvl = 'Bronze';
    };
    
    if(balance >= 21 && balance <= 50 ){
        lvl = 'Silver';
    };
    
    if(balance >= 51 && balance <= 80 ){
        lvl = 'Gold';
    };
    
    if(balance >= 81 && balance <= 90 ){
        lvl = 'Diamond';
    };
    
    if(balance >= 91 && balance <= 100 ){
        lvl = 'Lendary';
    };
    
    if(balance >= 101){
        lvl = 'Immortal';
    };

    alert(`The hero has winning balance of **${winningBalance}** it at yhe level of **${lvl}**`);
}

rankHero(winningBalance);