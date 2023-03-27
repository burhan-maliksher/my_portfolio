import Image from "next/image"
import Link from "next/link"

export const SkillCircle=()=>{
    return(
        <span>
            <Image src={'/assets/backgrounds/skills stone.svg'} width={200} height={200} alt={'circle '}/>
        </span>
    )
}

export const Cap=()=>{
    return(
        <span >
            <Image src={'/assets/illustrations/cap.svg'} width={100} height={200} alt={'cap '} />
        </span>
    )
}

export const Wave=()=>{
    return(
        <span>
            <Image src={'/assets/illustrations/wave.svg'} width={0} height={0} alt={'wave '} className="w-screen "/>
        </span>
    )
}

export const Twitter=()=>{
    return(
        <span>
           <Link href={'https://twitter.com/BURHANmaliksher'} prefetch={false} target="_blank"><Image src={'/assets/icons/twitter.svg'} width={0} height={0} alt={'wave '} className="w-auto hover:bg-sky-500 hover:rounded hover:p-2 cursor-pointer"/></Link>
        </span>
    )
}

export const Linkedin=()=>{
    return(
        <span>
            <Link href={'https://www.linkedin.com/in/muhammad-burhan-a444181b7/'} prefetch={false} target="_blank"><Image src={'/assets/icons/linkedin.svg'} width={0} height={0} alt={'wave '} className="w-auto  hover:bg-sky-500 hover:rounded hover:p-2 cursor-pointer"/></Link>
        </span>
    )
}
