import React, { useState } from "react";

export const NewHouseForm = (props) => {
    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name !== '') {
            props.addNewHouse( name );
            setName('');
            console.log(name);
        } else {
            console.log('Please enter a name.');
        }
    };

    return (
        <div>
            <hr></hr>
            <h4>Add A New House</h4>
            <hr></hr>
            <form onSubmit={e => onSubmit(e)}>
                <input
                    type='text'
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button type="submit">Create House</button>
            </form>
        </div>
    )
}