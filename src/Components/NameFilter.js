import React from 'react'
/*name filter = input de recherche*/
const NameFilter = ({value = '', onChange = () => {}}) => (

        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" 
            type="text" name="query"
                placeholder="i.e. Jurassic Park"
                value={value} 
                onChange={(event) => {
                onChange(event.target.value)
            }} />
            <button className="button" type="submit">Search</button>
        </form>   
    
)
export default NameFilter
