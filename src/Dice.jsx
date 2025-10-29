import dicePurple1 from './assets/dice-purple-1.svg';
import dicePurple2 from './assets/dice-purple-2.svg';
import dicePurple3 from './assets/dice-purple-3.svg';
import dicePurple4 from './assets/dice-purple-4.svg';
import dicePurple5 from './assets/dice-purple-5.svg';
import dicePurple6 from './assets/dice-purple-6.svg';
import diceRed1 from './assets/dice-red-1.svg';
import diceRed2 from './assets/dice-red-2.svg';
import diceRed3 from './assets/dice-red-3.svg';
import diceRed4 from './assets/dice-red-4.svg';
import diceRed5 from './assets/dice-red-5.svg';
import diceRed6 from './assets/dice-red-6.svg';

const diceImages = {
    purple: [dicePurple1, dicePurple2, dicePurple3, dicePurple4, dicePurple5, dicePurple6],
    red: [diceRed1, diceRed2, diceRed3, diceRed4, diceRed5, diceRed6],
};


function Dice({ color = "purple", num = 1 }) {

    const src = diceImages[color][num - 1];
    const alt = `${color} ${num}`;
    
    return <img src={src} alt={alt} />;
}

export default Dice;