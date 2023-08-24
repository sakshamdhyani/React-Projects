import { useMemo, useState } from "react";

function App() {

  const [weight , setWeight] = useState('60');
  const [height , setHeight] = useState('180');





  function changeHandler(event) {

    const name = event.target.name;
    name === "height" ? (setHeight(event.target.value)) : (setWeight(event.target.value))
    
  }

  const bmi = useMemo(() => {

      const calculateHeight = height/100;

      const output = weight / (calculateHeight * calculateHeight);

      return output.toFixed(2);

  },[weight,height]) 


  return (
    <div>


      <div>

        <div>BMI Calculator</div>

        <div>
          <p>Weight : {weight} Kg</p>

          <input type="range" 
            name="weight"
            value={weight}
            min={35}
            max={200}
            step={1}
            onChange={(event) => changeHandler(event)}
          />
        </div>

        <div>
          <p>height : {height} cm</p>

          <input type="range" 
            name="height"
            value={height}
            min={140}
            max={220}
            step={1}
            onChange={(event) => changeHandler(event)}
          />
        </div>

        <div>
          Your BMI is {bmi}
        </div>

      </div>


    </div>
  );
}

export default App;
