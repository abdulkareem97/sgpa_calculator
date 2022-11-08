import React from 'react'


const Heading = (props) => {
    return (
        <div className='flex justify-center flex-col'>
            <div className='text-center font-bold text-3xl flex flex-col justify-center m-5'>
                <span className='bg-slate-900 text-white p-4 rounded-3xl w-fit self-center'>
                    AK
                </span>
                <span className='underline'>
                    SGPA Calculator
                </span>
            </div>
            <div className='text-center font-bold text-2xl p-3'>

                <h1>
                    Enter No. Of Courses (Theory + Lab)
                </h1>
            </div>
            <div className='flex justify-center my-5 '>
                <input type="number" name="" id=""
                    className='text-3xl w-1/2 p-3 text-center border bg-slate-400 text-white rounded-full outline-none 
                        focus:border-slate-700 focus:border-4 placeholder:text-white placeholder:opacity-25
                    '
                    placeholder='0'
                    value={props.value} onChange={e => props.onChange(e.target.value)} />
            </div>
        </div>
    )
}

export default Heading
