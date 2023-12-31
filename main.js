const root = ReactDOM.createRoot(document.getElementById('root'));

// function Counter({ sum, setSum, removeCounter }) {
//   const updateCounter = (value) => {
//     if (sum + value >= 0) {
//       setSum(sum + value);
//     }
//   };

//   return (
//     <div className='counter'>
//       <button onClick={() => updateCounter(-1)}> - </button>
//       <h3>{sum}</h3>
//       <button onClick={() => updateCounter(1)}> + </button>
//       <button onClick={() => setSum(0)}> C </button>
//       <button onClick={() => removeCounter()}> X </button>
//     </div>
//   );
// }

const Counter = ({ sum, setSum, removeCounter }) => {
  const updateCounter = (value) => {
    if (sum + value >= 0) {
      setSum(sum + value);
    }
  };

  return (
    <div className='counter'>
      <button onClick={() => updateCounter(-1)}> - </button>
      <h3>{sum}</h3>
      <button onClick={() => updateCounter(1)}> + </button>
      <button onClick={() => setSum(0)}> C </button>
      <button onClick={() => removeCounter()}> X </button>
    </div>
  )
}

// function AddButton({ onClick }) {
//   return (
//     <div className='addbutton'>
//       <button onClick={onClick}>Add</button>
//     </div>
//   );
// }

// function SumInfo({ sum }) {
//   return (
//     <div className='suminfo'>
//       <h1>Sum = {sum}</h1>
//     </div>
//   );
// }

const AddButton = ({ onClick }) => {
  return (
    <div className='addbutton'>
      <button onClick={onClick}>Add</button>
    </div>
  );
}

const SumInfo = ({ sum }) => {
  return (
    <div className='suminfo'>
      <h1>Sum = {sum}</h1>
    </div>
  );
}


// function App() {
//   const [counters, setCounters] = React.useState([0]);
//   const [sum, setSum] = React.useState(0);

//   const addCounter = () => {
//     setCounters([...counters, 0]);
//   };

//   // removeCounter
//   function removeCounter(index) {
//     const updatedCounters = [...counters];
//     updatedCounters.splice(index, 1);
//     setCounters(updatedCounters);
//     setSum(updatedCounters.reduce((acc, curr) => acc + curr, 0));
//   }

//   return (
//     <>
//       <h1>Counter</h1>
//       <AddButton onClick={addCounter} />

//       <SumInfo sum={sum} />
//       {counters.map((count, index) => (
//         <Counter
//           key={index}
//           sum={count}
//           setSum={(value) => {
//             const updatedCounters = [...counters];
//             updatedCounters[index] = value;
//             setCounters(updatedCounters);
//             setSum(updatedCounters.reduce((acc, curr) => acc + curr, 0));
//           }}
//           removeCounter={() => removeCounter(index)}
//         />
//       ))}
//     </>
//   );
// }

const App = () => {
  const [counters, setCounters] = React.useState([0]);
  const [sum, setSum] = React.useState(0);

  const addCounter = () => {
    setCounters([...counters, 0]);
  };


  
const removeCounter = (index) => {
  const updatedCounters = [...counters];
  updatedCounters.splice(index, 1);
  setCounters(updatedCounters);
  setSum(updatedCounters.reduce((acc, curr) => acc + curr, 0));
  }
  
  return (
    <>
      <h1>Counter</h1>
      <AddButton onClick={addCounter} />

      <SumInfo sum={sum} />
      {counters.map((count, index) => (
        <Counter 
          key={index}
          sum={count}
          setSum={(value) => {
            const updatedCounters = [...counters];
            updatedCounters[index] = value;
            setCounters(updatedCounters);
            setSum(updatedCounters.reduce((acc, curr) => acc + curr, 0));
          }}
          removeCounter={() => removeCounter(index)}
        />
      ))}
    </>
  )
}

root.render(<App />);
