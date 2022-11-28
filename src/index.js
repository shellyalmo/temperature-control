import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {

    const [count, setCount] = useState(25); //initial state is room temperature
    // use effect for API call - maybe add in a second screen


    const increased = () => setCount(count + 1);
    const decreased = () => setCount(count - 1);
    let newColor;


    if(count >= 40){
        newColor = 'scorching';
    }

    else if (count >= 30 && count <= 39){
        newColor = 'hot';
    }

    else if (count >= 26 && count <= 29){
        newColor = 'warm';
    }

    else if (count >= 20 && count <= 25){
        newColor = 'comfortable';
    }

    else if (count >= 10 && count <= 19){
        newColor = 'cool';
    }

    else if (count >= 1 && count <= 9){
        newColor = 'cold';
    }

    else if (count  <= 0){
        newColor = 'freezing';
    }

    return (
        <div className='screen'>
            <div className={`temperature-display ${newColor}`}>{count}°</div>
            <button className='increment-button' onClick={increased}>+</button>
            <button className='decrement-button' onClick={decreased}>-</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

