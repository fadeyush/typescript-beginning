import React, { FC, useRef, useState } from 'react';

const EventExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
        console.log(inputRef.current?.value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag');
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
        console.log('drop');
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type='text' placeholder='Управляемый'></input>
            <input ref={inputRef} type='text' placeholder='Неуправляемый'></input>
            <button onClick={clickHandler}>Click</button>
            <div onDrag={dragHandler} style={{width: 200, height: 200, backgroundColor: 'red'}}></div>
            <div 
            onDrop={dropHandler}
            onDragLeave={leaveHandler}
            onDragOver={dragWithPreventHandler}
            style={{width: 200, height: 200, backgroundColor: isDrag ? 'green' : 'red', marginTop: 15}}></div>
        </div>
    );
};

export default EventExample;