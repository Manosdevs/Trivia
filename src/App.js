import React, { useState, useEffect} from 'react'

import Landing from './components/landing';
import Question from './components/question';



import CheckButton from './components/check';








function App() {
  const [page, setPage] = useState(true)
  const [questData, setQuestData] = useState()
  const [qsts, setQsts] = useState([])
  const [check, setCheck] = useState(false)
  const [counter, setCounter] = useState(0)
  const [toggleCheck, setToggleCheck] = useState(Array(5).fill(false)
  const [resultClass, setResultClass] = useState('resultsoff')
 

 
  
  
  const diffs = {
    'Easy' : 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple',
    'Medium': 'https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple',
    'Hard': 'https://opentdb.com/api.php?amount=5&difficulty=hard&type=multiple'
  }

 
 async function handleClick(event) {
   

    
    const value = event.target.innerText
    const res = await fetch(diffs[value])
   
      const data = await res.json()
      
      

      if (res.ok) {
        setQuestData(data)
        setPage(false)
        setCounter(0)
        setResultClass('resultsoff')
        
       

      } else {
        setQuestData(null)
      }
  }



  useEffect(() => {

    
    if (page === false)
      {
        
        setQsts(questData.results.map((elem,i) => {
        return <Question 
        inc={elem.incorrect_answers}
        cor={elem.correct_answer}
        question={elem.question}
        check={check}
        incCount={incCount}
        counter={counter}
        questdata={questData}
        resetcheck={resetCheck}
        handleToggleButton={handleToggleButton}
        idx={i}
        category={elem.category}
        toggleCheck={toggleCheck}
        />
      }))}
   // eslint-disable-next-line 
  }, [page,check, questData])

  function handleCheck() {
    setCheck(true)
    console.log('clicked')
    setResultClass('resultson')
    

  }

  function resetCheck() {
    setCheck(false)
  }

  function handleReset() {
    setCheck(false)
    setPage(true)
    
    
  }
  
  function incCount() {
    setCounter((prev) => {
      return prev + 1
      }) 
     
}

  function initToggleState() {
    setToggleCheck(Array(5).fill(false)
  }


function handleToggleButton(questidx) {
    setToggleCheck(elem => elem.map((e, index) => {
      console.log(toggleCheck)
      return   index === questidx
          ? true
          : e
      }))
}


  return (
    <div>
     {page && <Landing initializeToggleState={initToggleState} handleClick={handleClick} />}
     {!page && <div className='page2cont'>
      {<div className='questcont'> {qsts} </div>}
        {<div className={resultClass}> You got {counter} / 5 correct! </div>}
        <div className='endbtns'>
          {<CheckButton checkstate={check} toggleCheck={toggleCheck} handleCheck={handleCheck} className="checkbtn" />}
          {<button onClick={() => handleReset() }>Reset Game</button>}
        </div>
     </div>}
    </div>
  );
}

export default App;
