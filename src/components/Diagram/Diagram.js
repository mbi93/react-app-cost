import  "./Diagram.css";
import DiagramsBar from "./DiagramsBar";

const Diagram = (props) => {
    
    const dataSetValues = props.dataSets.map(dataSet => dataSet.value)
    
    const maxMonthCosts = Math.max(...dataSetValues);
    console.log(maxMonthCosts);
    return(
        <div className="diagram">
            {props.dataSets.map(dataSet => <DiagramsBar 
            key = {dataSet.label}
            value ={dataSet.value} 
            maxValue ={maxMonthCosts} 
            label={dataSet.label}/> )}
        </div>
    )
}

export default Diagram;