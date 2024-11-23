import React from 'react'

const Card = ({ data }) => {
    console.log(data);

    return (
        <div className='w-full text-white bg-gradient-to-r from-blue-500 to-yellow-400 flex justify-center flex-wrap'>
            {data.map((e, index) => {
                if (!e.urlToImage) {
                    return null
                } else {
                    return (
                        <div className='card w-[26vw] bg-white m-10 text-black transform transition-transform duration-200 ease-in-out hover:scale-110'>
                            <img onClick={() => { window.open(e.urlToImage) }} className='w-[100%] h-[200px] object-cover cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105' src={e.urlToImage} alt="" />
                            <div className="cardcontent p-5">
                                <a onClick={() => { window.open(e.url) }} className='bg-yellow-300 hover:underline cursor-pointer'>{e.title}</a>
                                <p className='mt-5'>Desc : {e.description}</p>
                                <button onClick={() => { window.open(e.url) }} /* onClick={readMore.bind(null,e.url)} */ className='hover:underline bg-red-500 px-2 mt-5'>Read More</button>

                            </div>
                        </div>
                    )

                }

            })}
        </div>
    )
}


export default Card