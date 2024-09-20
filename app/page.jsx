import { Button } from "@/components/ui/button"
import { MdOutlineCloudDownload } from "react-icons/md";
import React from 'react'
import SocialIcons from "@/components/SocialIcons";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
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

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button className='uppercase flex items-center gap-2' size='lg' variant='outline'>
                <a href="https://drive.google.com/file/d/1GdEznA4AbFAq0GCD51aMvSxZVikX5rSl/view?usp=sharing" target="blank"><span>Download CV</span></a>
                <MdOutlineCloudDownload className='text-xl' />
              </Button>

              <div className="mb-8 xl:mb-0">
                <SocialIcons containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center 
                items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500' />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home