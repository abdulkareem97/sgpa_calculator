import React from 'react'

const Rows = (props) => {

    let croutline = '',gpoutline = ''
    if(props.cr == '')
    croutline = 'outline-red-800'
    if(props.gp == '')
    gpoutline = 'outline-red-800'



    return (
        <>
            <tr>
                <td className='p-3 w-1/2'>
                    <input type="number" name="" id=""
                        className={`text-3xl w-1/2 p-3 text-center border bg-slate-400 text-white rounded-full outline-none 
                                         focus:border-slate-700 focus:border-1 placeholder:text-white placeholder:opacity-25 
                                  ` + croutline}
                                  
                                  
                                  value={props.cr}
                        placeholder='0' onChange={(e) => props.onChange(e.target.value,'cr')}
                    />

                </td>
                <td className='p-3 w-1/2' >
                    <input type="number" name="" id=""
                        className={`text-3xl w-1/2 p-3 text-center border bg-slate-400 text-white rounded-full outline-none 
                                 focus:border-slate-700 focus:border-1 placeholder:text-white placeholder:opacity-25
                              `+gpoutline}
                             value={props.gp}
                        placeholder='0' onChange={(e) => props.onChange(e.target.value,'gp')}
                    />
                </td>
            </tr>
        </>
    )

}

const Cgpa_Table = (props) => {
    const rows = [];
    for (let i = 0; i < props.rows; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html


        let cr = props.credits[i] != 0 ? props.credits[i] : ''
        let gp = props.grades[i] != 0 ? props.grades[i] : ''
        rows.push(
            <Rows
             key={i} id={i} onChange={(v,type) => props.onChange(v, i,type)}
             cr = {cr} gp = {gp}
             />
        );
    }

    return (
        <div className='flex justify-center overflow-x-auto relative p-3   '>
            <table className='w-full text-sm border text-center   text-gray-500'>
                <thead className='text-gray-400 uppercase  bg-gray-700'>
                    <tr>
                        <th className='p-3'>

                            Credit
                        </th>
                        <th>
                            Grade Point
                        </th>
                    </tr>
                </thead >
                <tbody className=' border-b bg-gray-800 border-gray-700'>
                    {
                        rows
                    }


                </tbody>
            </table>

        </div >
    )
}

export default Cgpa_Table
