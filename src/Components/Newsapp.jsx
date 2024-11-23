import React, { useState, useEffect } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setsearch] = useState("Elon musk")
    const [newsData, setnewsData] = useState(null)
    // const api_key = "0fd7bcfe153e491ab1bc28fdc8273fcf"
    const api_key = "fa0d98c3750e48b18471a7c5842e93db"

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${api_key}`)
        const cvrtinjsonData = await response.json();
        setnewsData(cvrtinjsonData.articles)
        setTimeout(() => {
            setsearch("")
        }, 100);
    }

    useEffect(() => {
        getData()
    }, [])

    const handleInput = (e) => {
        setsearch(e.target.value);
    }
    const userInput = (e) => {
        setsearch(e);
    }

    return (<>
        <div className='w-full h-screen bg-gradient-to-r from-blue-500 to-yellow-400'>
            <nav className='font-semibold border-b-2 border-gray-800 bg-gradient-to-r from-blue-500 to-yellow-500 relative text-3xl w-full h-[15%] bg-zinc-500 flex justify-between items-center px-10'>
                <h1 className='cursor-pointer  hover:underline'>Trendy News</h1>
                <h1 className='cursor-pointer  hover:underline' >All News </h1>
                <i onClick={getData} className="ri-search-line absolute right-[70vw] z-10 cursor-pointer"></i>
                <div className='absolute right-[40%] '>
                    <input onChange={handleInput} value={search} className='text-white bg-gradient-to-r from-black to-zinc-600 w-[150%] py-2 px-4 rounded-md' type="text" placeholder='Search Here !' />
                </div>
            </nav>
            <nav className='w-full flex justify-between px-10 mb-5'>
                <h1 onClick={() => userInput("sports")} className=' cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-150 mt-4 rounded-md px-2 bg-black text-white hover:bg-white hover:text-black'>Sports</h1>
                <h1 onClick={() => userInput("Politics")} className='cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-150 mt-4 rounded-md px-2 bg-black text-white hover:bg-white hover:text-black'>Politics</h1>
                <h1 onClick={() => userInput("Entertainment")} className='cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-150 mt-4 rounded-md px-2 bg-black text-white hover:bg-white hover:text-black'>Entertainment</h1>
                <h1 onClick={() => userInput("Wealth")} className='cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-150 mt-4 rounded-md px-2 bg-black text-white hover:bg-white hover:text-black'>Wealth</h1>
                <h1 onClick={() => userInput("Fitness")} className='cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-150 mt-4 rounded-md px-2 bg-black text-white hover:bg-white hover:text-black '>Fitness</h1>
            </nav>
            <div >
                {newsData ? <Card data={newsData} /> : null}

            </div>
        </div>
    </>
    )
}
export default Newsapp

