import React, { useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
const Table = (props) => {
    const [model, setModel] = useState(false)
    const [payment, setdueAmount] = useState('');
    const [name, setName] = useState('');
    
    const payDue = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/customer/clear-due',{  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
        },  
        body: JSON.stringify({payment, name})
    })
        console.log('pay due')
    }   
  return (
    <div className="overflow-x-auto">
    <table className="w-auto bg-white border border-gray-300">
        <thead className="bg-white drop-shadow-md text-sm sm:text-lg font-semibold">
            <tr>
                {props.headings.map((heading, i) => (
               <th key={i} className={`py-2 px-4 border-b ${i===0?'':i==1?'text-red-600':i===2?'text-green-600':'text-orange-600'} border-gray-300`}>{heading}</th>
              
            ))}
            </tr>
        </thead>
        <tbody>
{props.Data && props.Data.map((data, i) => (

   
      <tr key={i} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-300">{data.name}</td>
               {data.phone && <td className="py-2 px-4 border-b border-gray-300">{data.phone}</td>} 
                
                <td className="py-2 px-4 border-b border-gray-300">{data.totalDueAmount}</td>
                <td className="py-2 px-4 border-b border-gray-300">{data.totalPaidAmount}</td>
                <td className="py-2 px-4 border-b border-gray-300">{data.totalAmount}</td>
                {!data.phone && <td className="py-2 px-4 border-b border-gray-300">
                    <button className="bg-[#f0f0f0] text-green-600 px-2 py-1 rounded-lg" onClick={()=>{setModel(true), setName(data.name)}}>Clear Due</button>
                    
                </td>}  
            </tr>
    
))}
</tbody>
    </table>
    <div>



   {model && <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
             <MdOutlineCancel onClick={()=>setModel(false)} className="text-red-600 h-6 w-6 cursor-pointer" aria-hidden="true" />
            </div>
            <div class="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Customers Due Pay</h3>
              <div class="mt-2 w-full">
               <form >
                    <label for="due" class="block text-sm font-semibold text-gray-700">Due Amount</label>
                    <input type="text" onChange={(e)=>setdueAmount(e.target.value)} name="due" id="due" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="Enter Due Amount" />
               <div class="bg-gray-50  py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" onClick={payDue} class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 sm:ml-3 sm:w-auto">Pay Due</button>
                    
                    </div>
                </form>
            </div>
          </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div>
}


    </div>
    
</div>
  )
}

export default Table
