import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1 className="font-bold text-5xl">Hello World!</h1>
     
     <Link href={"/dashboard"}>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Dashboard
     </button>
    </Link>
    

    <Link href={"/blogs"}>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      See all blogs
     </button>
    </Link>
    
    <Link href={"/contact"}>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Contact
     </button>
    </Link>

    <Link href={"/about"}>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      About
     </button>
    </Link>



    </div>
  );
}