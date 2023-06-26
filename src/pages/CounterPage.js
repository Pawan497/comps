import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

// //custom-hook
// function useCounter(initialCount) {

//     const [count, setCount] = useState(initialCount);

//     useEffect(() => {
//         console.log (count);
//     },[count]);

//     const increment = () => {
//         setCount(count + 1);
//     };

//     return {
//         count,
//         increment
//     };

// }

function CounterPage({ initialCount}) {
    const { count, increment } = useCounter(initialCount);

    return (<div>
        <h1>
        Count is {count}
        </h1>
        <Button primary onClick={increment} >
            Increment
        </Button>
    </div>);
}

export default CounterPage;