const Filter = ({id,options})=>{
    return <>
    <select id={id}>
        {options.map(option=><option key={option} value={option}>{option}</option>)}
    </select>

    </>
}
export default Filter;