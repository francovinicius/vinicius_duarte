"use client";

import { FaHtml, FaCss3, FaJS, FaReact, FaFimga, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import React from 'react'

const about = {
  title: 'About me',
  description: 'Loren Ipson',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Vinicius Duarte',
    },
    {
      fieldName: 'Phone',
      fieldValue: '24 99987-9994',
    },
    {
      fieldName: 'Experience',
      fieldValue: '+2 Anos',
    },
    {
      fieldName: 'Email',
      fieldValue: 'duartevini.dev@gmail.com',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Português, Inglês',
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Experiências',
  description: 'resrterwe qewdw eddu dgsadgsadgsadgasdgasd jas saj hsakjdhasjkd hsadh kjhd ',
  items: [
    {
      company: "tech tech",
      position: 'dev',
      duaration: '2022 - Present'

    },
    {
      company: "tech tech 2",
      position: 'dev',
      duaration: '2022 - Present'

    },
    {
      company: "tech tech 3",
      position: 'dev',
      duaration: '2022 - Present'

    },
    {
      company: "tech tech 4",
      position: 'dev',
      duaration: '2022 - Present'

    },
  ]
}

const education = {
  icon: 'assets/resume/cap.svg',
  title: 'Formação',
  description: 'resrterwe qewdw eddu dgsadgsadgsadgasdgasd jas saj hsakjdhasjkd hsadh kjhd ',
  items: [
    {
      instituition: "Centro Universitário Geraldo di Biase",
      degree: 'Graduado em Matemática',
      duaration: 'Jan/13 - Dez/16'

    },
    {
      instituition: "Estácio de Sá",
      degree: 'Graduado em Análise e Desenvolvimento de sistemas',
      duaration: 'Jan/22 - Jul/24'

    },
    {
      instituition: "Pontifícia Universidade Católica",
      degree: 'Pós-Graduando em Full Stack',
      duaration: 'Set/24 - Set/25'

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
            <TabsTrigger value='skills'>
              Skills
            </TabsTrigger>
            <TabsTrigger value='education'>
              Education
            </TabsTrigger>
            <TabsTrigger value='about'>
              About
            </TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full'>
              test
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume