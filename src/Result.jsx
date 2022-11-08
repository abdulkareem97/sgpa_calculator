import React from 'react'

const Result = (props) => {
    let sgpa = props.value

    if(props.value == NaN)
    {
        sgpa = '0'
    }
    return (
        <div className='flex justify-center text-2xl text-center mt-4 '>

            <h1>

                {props.msg}
            </h1>
            <h1 className='font-bold text-3xl pl-3'>
                {sgpa}
            </h1>
        </div>
    )
}

export default Result
