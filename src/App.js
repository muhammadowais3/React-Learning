import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = ()=> {
  const expenses = [
    {
      id: "ep1",
      date: new Date(2020, 11, 21),
      title: "Car Purchase",
      amount: 27.6,
    },
    {
      id: "ep2",
      date: new Date(2022, 14, 4),
      title: "Car Insurance",
      amount: 399.8,
    },
    {
      id: "ep3",
      date: new Date(2021, 1, 21),
      title: "Marriage",
      amount: 248.6,
    },
    {
      id: "ep4",
      date: new Date(2021, 23, 17),
      title: "Computer",
      amount: 1050.7,
    },
  ];

return (
  <div>
    <NewExpense />
    <Expenses items = {expenses}/>
  </div>
);
}
export default App;
