import { useState } from 'react'
import './Dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'

const Dropdown = (props) => {


const options = props.options;
const name = props.name;

if(options == undefined){
    return(
        <>
            <h3>No options</h3>
        </>
    )
}

const optionsItems = [];
for (let i = 0; i < options.length; i++) {
    const tempOption = options[i];
    optionsItems.push(<a className="flex-item-2" href="/">{tempOption}</a>)
}

  return (
    <div className='dropdown'>
        <button className='dropdown-button'><div className='button-label'>{name}</div><FontAwesomeIcon className="fa-icon" icon={faChevronDown} /></button>
        <div className='dropdown-content'>
            {optionsItems}
        </div>
    </div>
  )
}

export default Dropdown