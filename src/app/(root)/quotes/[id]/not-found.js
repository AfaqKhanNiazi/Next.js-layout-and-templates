import Link from "next/link";


export default function NotFound(){
 return(

    <div className="min-h-screen flex flex-col gap-5 justify-center items-center">
        <h1 className="font-semibold text-3xl text-center">Sorry Quote Not Found</h1>
        <Link href={"/quotes"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        See ALL Quotes Available
        </Link>
    </div>
        
    )
}