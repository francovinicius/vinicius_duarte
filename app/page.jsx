import { Button } from "@/components/ui/button"
import { MdOutlineCloudDownload } from "react-icons/md";
import React from 'react'

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Desenvolvedor de Software</span>
            <h1 className="h1 mb-6">Olá, eu sou<br /><span className="text-accent">Vinicius Duarte</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Trabalho para entregar experiências tanto web quanto mobile funcionais, fluidas, responsivas e elegantes.
              Seguem algumas das linguagens e ferramentas que já utilizei em meus projetos: <br />
              Linguagens: JavaScript, Dart, SQL, PHP, Kotlin.
              Frameworks:  NodeJs, ReactJs NextJs, Flutter, Bootstrap, Tailwind, WordPress.
              Banco de dados: Mysql, Firebase.
              Outros: Integração com API, Git/Github, Figma Excel, Google Sheets e Forms.
            </p>

            <div>
              <Button className='uppercase flex items-center gap-2' size='lg' variant='outline'>
                <span>Download CV</span>
                <MdOutlineCloudDownload className='text-xl' />
              </Button>
              
            </div>

          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default Home