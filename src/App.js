import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COST = [
  {
    id: 'c1',
    date: new Date(2020, 2, 12),
    description: 'Холодильник',
    amount: 999.99
  },
  
  {
    id: 'c2',
    date: new Date(2020, 10, 12),
    description: 'MacBook',
    amount: 1254.99
  },
  {
    id: 'c3',
    date: new Date(2021, 4, 12),
    description: 'Iphone',
    amount: 1050.99
  },
  {
    id: 'c4',
    date: new Date(2022, 5, 12),
    description: 'Автомобиль',
    amount: 15210.99
  }

]

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COST);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
