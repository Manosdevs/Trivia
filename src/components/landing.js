import React, {useEffect} from "react";

export default function Landing(props) {

    useEffect(() => {
        props.initializeToggleState()
            
    }, [])

    
    return(
        <div className="cont">
            <h1 className='landheader'>Quiz</h1>
            <p className='version'>v1.0.2</p>
            <p className='landp'>Choose Difficulty!</p>
            
                <button onClick={props.handleClick} className='difbtn'>Easy</button>
                <button onClick={props.handleClick} className='difbtn'>Medium</button>
                <button onClick={props.handleClick} className='difbtn'>Hard</button>
               
        </div>
    )
}

