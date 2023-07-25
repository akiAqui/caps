import { useState } from "react";

export default function App() {
    const [allGoals, updateAllGoals] = useState([]);

    function addGoal(goal) {
        updateAllGoals([...allGoals,goal]);
    }
    return (
      <div className="App">
        <GoalForm onAdd={addGoal} />>
        <ListOfGloals allgoals={allGoals} />
      </div>
    );
  }
  function GoalForm(props)  {
    const [formData, setFormData] = useState({goal:"", by:""});
    function changeHandler(e) {
        setFormData( {...formData, [e.target.name]: e.target.value});
    }
    function submitHandler(e) {
        e.preventDefault();
        props.onAdd({formData});
        setFormData({goal:"", by:""});
    }
    return(
        <>
        <h1> My Little Lemon Goals</h1>
        <form onSubmit={submitHandler}>
            <input type="text" name="goal" placeholder="Goal..." value={formData.goal} onCHange={changeHandler} />
            <input type="text" name="by"   placeholder="By..."   value={formData.by}   onCHange={changeHandler} />
        </form>
        </>
    )
  }
  function ListOfGloals(props)  {
    return(
        <ul>
            {props.allGoals.map ( (g)=>(
                <li key={g.goal}>
                    <span> My Goal is to {g.goal}, by {g.by}.</span>
                </li>
            ))}
        </ul>
    )
  }
  