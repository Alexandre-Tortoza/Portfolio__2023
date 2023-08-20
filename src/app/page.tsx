import Image from 'next/image'

export default function Home() {
    return (
    <main>





    <div className='landing h-screen w-screen flex justify-around'>
        <div >


            <h1 className='myName font-bold text-6xl'>Alexandre Marques</h1>
            <div className='flex gap-2 items-center '>

                <span className='text-8xl'> {'{'}   </span>

                <nav className='flex flex-col justify-center text-xl text-center text-link gap-1'>
                    <a href="#" className=' hover:text-secondary delay-300 hover:delay-75  duration-300 hover:duration-200 ease-in-out'>Sobre Mim</a>
                    <a href="#" className=' hover:text-secondary delay-300 hover:delay-75  duration-300 hover:duration-200 ease-in-out'>Portfolio</a>
                    <a href="#" className=' hover:text-secondary delay-300 hover:delay-75  duration-300 hover:duration-200 ease-in-out'>Contato</a>
                </nav>

                <span className='text-8xl'> {'}'}   </span>

                <h2 className='dev text-3xl'>Desenvolvedor Full-Stack</h2>

            </div>

            <div className='max-w-xl'>
            <p className='mt-5 font-light'>Progamador Full-stack,sou apaixonado pelo que faço. Meu objetivo é gerar um impacto positivo na vida das pessoas. Estou constantemente em busca de novos desafios e adoro aprender coisas novas!</p>
            </div>


        </div>
        <Image src="/photoPlaceHolder.png" width={300} height={300} alt="Picture of the author"/>
    </div>


    <div className='m-14 gap-14 flex justify-around'>

        <div className='max-w-lg'>
            <h3 className='text-5xl text-secondary'>Sobre Mim</h3>
            <p className='text-xl '>Desde jovem, sempre fui fascinado por tecnologia. Em 2021, dei início à minha jornada na programação, começando pelo front-end, onde me identifiquei e evoluí rapidamente. Em 2022, ingressei na PUCPR, onde consegui aprimorar minhas habilidades. Logo após, tornei-me um desenvolvedor fullStack.</p>
        </div>

        <div>
        <h3 className='text-5xl text-secondary'>Skills</h3>
            <h6 className='font-extralight'>Principais</h6>
        <div className='flex  gap-2 pt-1'>
            <Image alt='Logo - Html' src="/html5-plain-wordmark.svg" width={60} height={60}></Image>
            <Image alt='Logo - Css' src="/css3-plain-wordmark.svg" width={60} height={60}></Image>
            <Image alt='Logo - JavaScript' src="/javascript-plain.svg" width={60} height={60}></Image>
            <Image alt='Logo - TypeScript' src="/typescript-plain.svg" width={60} height={60}></Image>
        </div>
        <div className='flex  gap-2 pt-1'>
            <Image alt='Logo - NetxJs' src="/nextjs-line.svg" width={60} height={60}></Image>
            <Image alt='Logo - React' src="/react-original.svg" width={60} height={60}></Image>
            <Image alt='Logo - TailWindCss' src="/tailwindcss-plain.svg" width={60} height={60}></Image>
        </div>
        <div className='flex  gap-2 pt-1'>
            <Image alt='Logo - CSharp' src="/csharp-line.svg" width={60} height={60}></Image>
            <Image alt='Logo - DotNet' src="/dot-net-plain.svg" width={60} height={60}></Image>
            <Image alt='Logo - MySQL' src="/mysql-plain-wordmark.svg" width={60} height={60}></Image>
        </div>
            <h6 className='font-extralight'>Conheço</h6>
        <div className='flex  gap-2 pt-1'>
            <Image alt='Logo - ' src="/python-plain-wordmark.svg" width={60} height={60}></Image>
            <Image alt='Logo - C' src="/c-line.svg" width={60} height={60}></Image>
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