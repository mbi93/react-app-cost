import React, { useState } from "react";
import './CostForm.css';

const CostForm = (props) => {
    const [InputName, setInputName] = useState('');
    const [InputAmount, setInputAmount] = useState('');
    const [InputDate, setInputDate] = useState('');
    // const [userInput, setuserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // });


    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        // console.log(event.target.value);
        // setuserInput((previousState) => {
        //     return {
        //        ...previousState,
        //        name : event.target.value 
        //     }
        // })
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        // console.log(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
    };

    const dateChangeHandeler = (event) => {
        setInputDate(event.target.value);
        // console.log(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const costData = {
            description: InputName,
            amount: InputAmount,
            date: new Date(InputDate)
        }
        // console.log(costData);
        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input type='text' value={InputName} onChange={nameChangeHandler}
                    ></input>
                </div>

                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input type='number' min='0.01' step='0.01' value={InputAmount} onChange={amountChangeHandler}></input>
                </div>

                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input type='date' min='2020-01-01' step='2022-12-31' value={InputDate} onChange={dateChangeHandeler}></input>
                </div>

                <div className='new-cost__actions'>
                    <button type='submit'>Добавить расход</button>
                    <button type='button' onClick={props.onCancel}>Отмена</button>
                </div>

            </div>

        </form>
    )
}

export default CostForm;