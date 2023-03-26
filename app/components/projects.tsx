import Image from "next/image"
import Link from "next/link"

export const Project1=()=>{
    return(
        <span className="flex bg-slate-900 border-4 border-sky-800 rounded-lg">
            <Image src={'/assets/projects thumbnails/project1.png'} width={200} height={200} alt={'project1 '}/>
            <div className="flex flex-col justify-around text-white">
                <button className="px-5"><Link href={''} target={"_blank"} prefetch={false} className="hover:border-blue-500 hover:border-2 px-2 rounded cursor-pointer hover:text-blue-500 ">Vist</Link></button>
                <button ><Link href={''} target={"_blank"} prefetch={false} className="hover:border-blue-500 hover:border-2 px-2 rounded cursor-pointer hover:text-blue-500 ">Code</Link></button>
            </div>
        </span>
    )
}

export const Project2=()=>{
    return(
        <span className="flex bg-slate-900 border-4 border-sky-800 rounded-lg">
            <Image src={'/assets/projects thumbnails/project2.png'} width={200} height={200} alt={'project2'}/>
            <div className="flex flex-col justify-around text-white">
                <button className="px-5"><Link href={''} target={"_blank"} prefetch={false} className="hover:border-blue-500 hover:border-2 px-2 rounded cursor-pointer hover:text-blue-500 ">Vist</Link></button>
                <button><Link href={''} target={"_blank"} prefetch={false} className="hover:border-blue-500 hover:border-2 px-2 rounded cursor-pointer  hover:text-blue-500 ">Code</Link></button>
            </div>
        </span>
    )
}

export const Project3=()=>{
    return(
        <span className="flex bg-slate-900 border-4 border-sky-800 rounded-lg">
            <Image src={'/assets/projects thumbnails/project3.png'} width={200} height={100} alt={'project3 '} className=" "/>
            <div className="flex flex-col justify-around text-white">
                <button className="px-5"><Link href={''} target={"_blank"} prefetch={false} className="hover:border-blue-500 hover:border-2 px-2 rounded cursor-pointer hover:text-blue-500 ">Vist</Link></button>
                <button><Link href={''} target={"_blank"} prefetch={false} className="hover:border-blue-500 hover:border-2 px-2 rounded cursor-pointer hover:text-blue-500 ">Code</Link></button>
            </div>
        </span>
    )
}

export const Project4=()=>{
    return(
        <span className="flex bg-slate-900 border-4 border-sky-800 rounded-lg">
            <Image src={'/assets/projects thumbnails/project4.png'} width={200} height={100} alt={'project4 '} className=" "/>
            <div className="flex flex-col justify-around text-white">
                <button className="px-5"><Link href={''} target={"_blank"} prefetch={false} className="hover:border-blue-500 hover:border-2 px-2 rounded cursor-pointer hover:text-blue-500 ">Vist</Link></button>
                <button><Link href={''} target={"_blank"} prefetch={false} className="hover:border-blue-500 hover:border-2 px-2 rounded cursor-pointer hover:text-blue-500 ">Code</Link></button>
            </div>
        </span>
    )
}