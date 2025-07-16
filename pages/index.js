import Link from "next/link"; 

export default function Home() { 
    return ( 
        <div> 
            <h1>Welcome</h1> 
            <nav> 
                <Link href="/login">Login</Link> |{" "} 
                <Link href="/register">Register</Link> |{" "} 
                <Link href="/profile">Profile</Link> |{" "} 
                <Link href="/echo">Echo</Link> 
            </nav> 
        </div> ); 
    }




// export default function Home() { 
//     return ( 
//         <div> <h1>Welcome to your Next.js Frontend</h1> 
//         <p> 
//             Try <a href="/login">Login</a> or <a href="/register">Register</a>. 
//             </p> 
//             </div> ); 
//     }