import { useState } from 'react'
import {Name} from './types.ts'

function DynamicInput() {
    const [data, setData] = useState <Name[]>([]);

    const handleClickAdd = () => {
        setData([...data, { fname: '', lname: '' }])
    }
    const handleDelete = (i:number) => {
        const deleteArr = [...data];
        deleteArr.splice(i, 1);
        setData(deleteArr);
    }
    const handleChange = (e:Event, i:number) => {
        const { name, value } = e.target as HTMLInputElement;
        const addDataArr:Name[] = [...data];
        addDataArr[i][name as keyof Name] = value;
        setData(addDataArr);


    }

    return (
        <div>
            <button onClick={handleClickAdd}> Add</button>
            {
                data.map((val, i) =>
                    <div>
                        <label>firstname</label>
                        <input type='text' value={val.fname} name="fname" onChange={(e) => handleChange(e, i)}>
                        </input>
                        <label>lasttname</label>
                        <input type='text' value={val.lname} name="lname" onChange={(e) => handleChange(e, i)}></input>
                        <button onClick={() => handleDelete(i)} >delete</button>
                    </div>
                )
            }
            <p> { data.length ? JSON.stringify(data):''}</p>
        </div>
    )
}

export default DynamicInput