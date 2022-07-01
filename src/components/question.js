import React, {useState, useEffect, useRef} from "react";
import {decode} from 'html-entities';
import { nanoid } from "nanoid";



export default function Question(props) {

    const [selectBtn, setSelectBtn] = useState('')
    const [ansBtns,setAnsBtns] = useState([])
    const [corClass, setCorClass] = useState('')
    const [wrongClass, setWrongClass] = useState('')
    const [refcont, setRefCont] = useState(props.cor)
    const [active, setActive] = useState(false)
    const ref = useRef(false)

    useEffect(() => {

        if (ref.current) {
         setActive(props.toggleCheck.every(elem => elem === true)) 
        } else {
            ref.current = true
        } 
       
  }, [props.toggleCheck])


    useEffect(() => {
         
        if (props.check) { 
            setCorClass('ansRight')
            setWrongClass('ansWrong')
            
           
            if (anstorend[selectBtn].props.children === props.cor) {
                props.incCount()
               
                
                
            }
        }props.resetcheck()
            
     // eslint-disable-next-line   
    },[props.check])
    
    
    function btnClick(i) {
        setSelectBtn(i)
        props.handleToggleButton(props.idx)
    }
    

            
    
    
    

    useEffect(() => {
        setAnsBtns([...props.inc, props.cor].sort((a,b) => 0.5 - Math.random()))
        setRefCont(props.cor)
        
     // eslint-disable-next-line   
    },[props.questdata])


    const anstorend = ansBtns.map((elem, i) => {
        let toadd = 'answer'
        if (i === selectBtn) {
            toadd += ' act'
        }
        if ( elem === refcont) {
            toadd+= ` ${corClass}`
        } else  {
            toadd+= ` ${wrongClass}`
        }
        
            
        
     
        return <button 
        
        key={nanoid()} 
        
        onClick={() => btnClick(i)}
        className={toadd }
        disabled={active}

        id={nanoid()} > 
        {decode(elem)}
        
    </button>})
    

   return ( <div className='quest'>
                <div className='questiontext'>
                    <h2>{decode(props.question)}</h2>
                    <h5>{props.category}</h5>
                </div>    
                <div className='divanswers'>
                    {anstorend}
                    
                </div>
                <hr className='line' />
            </div>)

   }
