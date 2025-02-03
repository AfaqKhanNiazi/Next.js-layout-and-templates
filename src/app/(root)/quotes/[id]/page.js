

export default async function SingleQuote ({params}){
    let SingleQuote = await fetch(`https://dummyjson.com/quotes/${params.id}`)
    SingleQuote = await SingleQuote.json();    
    return (
        <div className="p-10">
            <h1 className="text-center text-5xl font-mono leading-[70px] my-10">{SingleQuote.quote}</h1>
            <h1 className="font-thin text-center text-2xl">Quote by 
                <span className="underline font-bold">{SingleQuote.author}</span>
                </h1>
         </div>

    )
}