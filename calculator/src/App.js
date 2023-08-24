import { useState } from "react";

function App() {

  const[input , setInput] = useState('');
  const [warning,setWarning] = useState(false);

  const calculateResult = (input) => {

   

    try{

      const operators = ['+' , '-' , '*' , '/' ,'%'];
      let operator = null;

      for(let i=0; i<input.length; i++) {

        if(operators.includes(input[i])){
          operator = input[i];

          for(let j=0; j<operators.length; j++){
            
            if(operators.includes(input[i+1])){
              
              setWarning(true);

              setTimeout(() => {
                setWarning(false);
              },2000)

            
            }
            
            break;
          }
          break;
        }
      }


      if(!operator) {
        setInput(parseFloat(input).toString());
        return;
      }

      const [operand1 , operand2] = input.split(operator).map(parseFloat);

      let result;

      

      switch (operator){

        case '+':
          result = operand1 + operand2;
          break;

        case '-':
          result = operand1 - operand2;
          break;

        case '*':
          result = operand1 * operand2;
          break;

        case '/':
          result = operand1 / operand2;
          break;

        case '%':
          result = operand1 % operand2;
          break;
        default:
          throw new Error('Invalid Operator');
        

      }

      setInput(result.toString());


    }
    catch(error){
      setInput('Error');
    }

  }

  const handleButtonClick = (value) => {


    if(value === 'C'){
      setInput('');
    } else if(value === '<'){
      setInput(input.slice(0,-1))
    }else if(value === '='){

      calculateResult(input);
      
    }
    else{
      
      setInput((prev) => prev + value);
    }
  }

  return (
    <div className="flex flex-col h-[100vh] w-full items-center 
    justify-center bg-gray-500">

      <h2 className="relative -top-16 font-bold text-4xl underline uppercase text-white">
      Calculator
      </h2>
   
      <div className="border border-black p-5 rounded-xl bg-black">

      <div className=" border border-black bg-white rounded-full text-right min-h-[50px] max-h-max 
      flex flex-col justify-center w-[265px] mb-5 p-3">
        
        <h1 className="mr-5 ml-5">

            {
              warning  ? ("Don't use two operators simultaneously !") : (input)
            }

        </h1>
        
      </div>
        
      
        <div>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-yellow-400 m-2 " onClick={() => handleButtonClick('C')}>C</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('<')}>{'<'}</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('%')}>%</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('/')}>/</button>
        </div>

        <div>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('7')}>7</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('8')}>8</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('9')}>9</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('*')}>*</button>
        </div>

        <div>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('4')}>4</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('5')}>5</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('6')}>6</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('-')}>-</button>
        </div>

        <div>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('1')}>1</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('2')}>2</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('3')}>3</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('+')}>+</button>
        </div>

        <div>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('0')}>0</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('00')}>00</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-white m-2" onClick={() => handleButtonClick('.')}>.</button>
          <button className="border rounded-full border-black w-[50px] h-[50px] bg-yellow-500 m-2" onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>

    </div>
  );
}

export default App;
