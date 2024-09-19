"use client";

import { FaHtml, FaCss3, FaJS, FaReact, FaFimga, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import React from 'react'

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Experiências',
  description: 'Pós Graduando em Full Stack Developer, atuando a um pouco mais de 2 anos de como desenvolvedor Web/Mobile, entreguei cerca de 17 projetos (tanto Web quanto Mobile) entregues como freelancer. ',
  descriptionTwo: 'Meus Skills: HTML5, CSS3, Git/Github, Figma, JavaScript, ReactJs, NodeJs, Dart, Flutter, Bootstrap, Tailwind, Kotlin, PHP, WordPress, Integração com API, SQL, MySQL, Firebase, Excel, Google Sheets e Forms.',
  descriptionThree: 'Abaixo apresento-lhes alguns lugares um fiz/faço parte da equipe juntamente com minha função:',
  items: [
    {
      company: "Ajr Puxadas",
      position: 'Analista de sistemas',
      duaration: 'Mai/2022 o Momento',

    },
    {
      company: "Freelancer",
      position: 'Desenvolvedor Web/Mobile',
      duaration: 'Mai/2022 o Momento',
    },
    {
      company: "Youtility",
      position: 'Supervisor de operações',
      duaration: 'Mar/2019 à Mar/2020',
    },
    {
      company: "UGB - Centro Universitário Geraldo di Biase",
      position: 'Estágio de Redes e Manutenção',
      duaration: 'Jul/2014 - Jan/2017',
    },
  ]
}

const education = {
  icon: 'assets/resume/cap.svg',
  title: 'Formação',
  description: 'Hoje estou cursando Pós-Graduação em Desenvolvimento Full Stack na PUC Minas, porém em minha tragetória me graduei em Matemática e Análise e Desenvolvimento de Sistemas nas universidades abaixo mencionadas:',
  items: [
    {
      instituition: "Pontifícia Universidade Católica",
      degree: 'Pós-Graduando em Full Stack',
      duaration: 'Set/24 - Set/25'

    },
    {
      instituition: "Estácio de Sá",
      degree: 'Graduado em Análise e Desenvolvimento de sistemas',
      duaration: 'Jan/22 - Jul/24'

    },
    {
      instituition: "Centro Universitário Geraldo di Biase",
      degree: 'Graduado em Matemática',
      duaration: 'Jan/13 - Dez/16'

    },
  ]
}

const skills = {
  icon: 'assets/resume/cap.svg',
  title: 'Skills',
  description: 'resrterwe qewdw eddu dgsadgsadgsadgasdgasd jas saj hsakjdhasjkd hsadh kjhd ',
  items: [
    {
      subtitle: "Linguagens de Programação:",
      languages: 'JavaScript, Dart, PHP, Kotlin, SQL',
    },
    {
      subtitle: "Linguagens de Programação:",
      languages: 'JavaScript, Dart, PHP, Kotlin, SQL',
    },
    {
      subtitle: "Linguagens de Programação:",
      languages: 'JavaScript, Dart, PHP, Kotlin, SQL',
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className='min-h[80vh] flex items-center justify-center py-12 xl:py-0'>
      <div className="contaiter mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-[290px] xl:w-[400px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>
              Experience
            </TabsTrigger>
            <TabsTrigger value='education'>
              Education
            </TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3>{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description} <br /> {experience.descriptionTwo} <br /><br /> {experience.descriptionThree}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <h3 className='mb-3'>{item.position}</h3>
                        <span>{item.skills}</span>
                        <p>{item.company}</p>
                        <span>{item.duaration}</span>
                      </li>
                    })}
                  </ul>
                  <br />
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3>{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <h3 className='mb-3'>{item.degree}</h3>
                        <span>{item.instituition}</span>
                        <span>{item.duaration}</span>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume