import "../globals.css";

export default function Layout({children}) {
    return(
        <html>
            <body>
            <main className="flex min-h-screen">
            <div className="w-1/2 flex justify-center items-center bg-green-300">
                <h1>Image</h1>
            <h1>Image</h1>
            </div>
            <div>
            {children}
            </div>
        </main>
            </body>
        </html>
       
    )
}