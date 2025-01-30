import Link from "next/link";

export default function Dashboard() {
    return(
        <div className="container mx-auto text-center p-20">
     <h1 className="font-bold text-5xl">Dashboard</h1>

     <div className="flex flex-row gap-4">
     <Link href={"/dashboard/settings"}>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Settings
     </button>
    </Link>
    

    <Link href={"/dashboard/profile"}>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Profile
     </button>
    </Link>
     </div>
        </div>
    )
}