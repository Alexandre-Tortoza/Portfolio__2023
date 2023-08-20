import Image from 'next/image'

export default function Home() {
    return (
    <main>
    <div className='landing h-screen w-screen flex justify-around'>
        <div>
            <h1 className='text-4xl myName'>Alexandre Marques</h1>
            <div className='flex gap-2 items-center '>
                <span className='text-6xl'> {'{'}   </span>
                <nav className='flex flex-col justify-center text-center text-link gap-1'>
                    <a href="#" className=' hover:text-secondary delay-300 hover:delay-75  duration-300 hover:duration-200 ease-in-out'>Sobre Mim</a>
                    <a href="#" className=' hover:text-secondary delay-300 hover:delay-75  duration-300 hover:duration-200 ease-in-out'>Portfolio</a>
                    <a href="#" className=' hover:text-secondary delay-300 hover:delay-75  duration-300 hover:duration-200 ease-in-out'>Contato</a>
                </nav>
                <span className='text-6xl'> {'}'}   </span>
                <h2 className='dev'>Desenvolvedor Full-Stack</h2>
            </div>
            <p className='text-xs max-w-xs text-justify mt-5 font-light'>Progamador Full-stack,sou apaixonado pelo que faço. Meu objetivo é gerar um impacto positivo na vida das pessoas. Estou constantemente em busca de novos desafios e adoro aprender coisas novas!</p>
        </div>
        <Image src="/photoPlaceHolder.png" width={150} height={450} alt="Picture of the author"/>
    </div>
    <div className='m-14 gap-14 flex justify-around'>
        <div className='max-w-xs'>
        <h3 className='text-2xl text-secondary'>Sobre Mim</h3>
        <p className='text-xs '>Desde jovem, sempre fui fascinado por tecnologia. Em 2021, dei início à minha jornada na programação, começando pelo front-end, onde me identifiquei e evoluí rapidamente. Em 2022, ingressei na PUCPR, onde consegui aprimorar minhas habilidades. Logo após, tornei-me um desenvolvedor fullStack.</p>
        </div>
        <div>
        <h3 className='text-2xl text-secondary'>Skills</h3>
            <h6>Principais</h6>
        <div className='flex  gap-2 pt-1'>
            <Image alt='Logo - Html' src="/html5-plain-wordmark.svg" width={35} height={35}></Image>
            <Image alt='Logo - Css' src="/css3-plain-wordmark.svg" width={35} height={35}></Image>
            <Image alt='Logo - JavaScript' src="/javascript-plain.svg" width={35} height={35}></Image>
            <Image alt='Logo - TypeScript' src="/typescript-plain.svg" width={35} height={35}></Image>
        </div>
        <div className='flex  gap-2 pt-1'>
            <Image alt='Logo - NetxJs' src="/nextjs-line.svg" width={35} height={35}></Image>
            <Image alt='Logo - React' src="/react-original.svg" width={35} height={35}></Image>
            <Image alt='Logo - TailWindCss' src="/tailwindcss-plain.svg" width={35} height={35}></Image>
        </div>
        <div className='flex  gap-2 pt-1'>
            <Image alt='Logo - CSharp' src="/csharp-line.svg" width={35} height={35}></Image>
            <Image alt='Logo - DotNet' src="/dot-net-plain.svg" width={35} height={35}></Image>
            <Image alt='Logo - MySQL' src="/mysql-plain-wordmark.svg" width={35} height={35}></Image>
        </div>
        <div className='flex  gap-2 pt-1'>
            <Image alt='Logo - ' src="/python-plain-wordmark.svg" width={35} height={35}></Image>
            <Image alt='Logo - C' src="/c-line.svg" width={35} height={35}></Image>
        </div>
        </div>
    </div>






    <div>

        <h3 className='text-secondary uppercase text-center text-2xl'>Projetos</h3>

    </div>
    </main>
)
}


// Desde jovem, sempre fui fascinado por tecnologia. Em 2021, dei início à minha jornada na programação, começando pelo front-end, onde me identifiquei e evoluí rapidamente. Em 2022, ingressei na PUCPR, onde consegui aprimorar minhas habilidades. Logo após, tornei-me um desenvolvedor fullStack.