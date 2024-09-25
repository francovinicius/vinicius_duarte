"use client";

import { animate, motion } from 'framer-motion';
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper.css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

import Link from 'next/link';

const projects = [
  {
    category: 'frontend',
    title: 'Portfólio',
    description: 'Este projeto foi desenvolvido para destacar minhas habilidades e experiência como desenvolvedor Full Stack. O portfólio apresenta uma interface moderna e intuitiva, com uma navegação fluida e responsiva, otimizando a experiência do usuário em diferentes dispositivos.',
    stack: [
      { name: 'Reactjs' }, { name: 'NextJs' }, { name: 'Tailwind Css' }, 
    ],
    image: '/assets/work/2.png',
    live: 'https://viniciusduarte.vercel.app/',
    github: 'https://github.com/francovinicius/vinicius_duarte',

  },

  {
    category: 'mobile',
    title: 'E-personal',
    description: 'O E-personal é um aplicativo projetado para gerar treinos aleatórios para grupos musculares. Este aplicativo é uma ferramenta útil para entusiastas de fitness que desejam diversificar suas rotinas de exercícios, bem como para professores de educação física habilitados que desejam auxiliar na criação de treinos personalizados para seus alunos.',
    stack: [
      { name: 'Firebase' }, { name: 'Kotlin' }
    ],
    image: '/assets/work/12.png',
    live: '',
    github: '',

  },

  {
    category: 'FullStack',
    title: 'Sistema de Gestão de Advocacia',
    description: 'Este projeto trata-se de um protótipo de sistema de gestão desenvolvido inicialmente com o intuito de consultar processos jurídicos cadastrados na base da empresa, sendo expansível para a criação de serviços e comunicados para os colaboradores. ',
    stack: [
      {name: 'PHP' }, { name: 'Javascript' }, { name: 'SQL' }, { name: 'Bootstrap' }
    ],
    image: '/assets/work/1.png',
    live: 'https://github.com/francovinicius/sistema-de-gest-o-advocacia-full',
    github: 'https://github.com/francovinicius/sistema-de-gest-o-advocacia-full',

  },  

  {
    category: 'frontend',
    title: 'Buscador de Filmes',
    description: 'O projeto simula um buscador de filmes, onde os usuários podem pesquisar por títulos de filmes e obter informações sobre eles. Para a busca dos filmes o projeto conta com o auxilio da API OMDb API',
    stack: [
      { name: 'JavaScript' }, { name: 'ReactJs' }, { name: 'Consumo de API' }
    ],
    image: '/assets/work/14.svg',
    live: 'https://github.com/francovinicius/movieland?tab=readme-ov-file',
    github: 'https://github.com/francovinicius/movieland?tab=readme-ov-file',

  },
  {
    category: 'frontend',
    title: 'Media Tube',
    description: 'O MediaTube é um aplicativo web desenvolvido com ReactJS e Material UI 5 que permite aos usuários pesquisar e visualizar vídeos do YouTube através da API do YouTube do Rapid API.',
    stack: [
      { name: 'ReactJS' }, { name: 'Material UI 5' }, { name: 'Consumo de API' }
    ],
    image: '/assets/work/13.png',
    live: 'https://media-tube-sandy.vercel.app/',
    github: 'https://github.com/francovinicius/mediaTube?tab=readme-ov-file',

  },

  {
    category: 'frontend',
    title: 'Buscador de Cep',
    description: 'O projeto Buscador de CEP é uma aplicação desenvolvida para permitir que os usuários pesquisem informações sobre um CEP específico.',
    stack: [
      { name: 'ReactJs ' }, { name: 'Consumo de API' }
    ],
    image: '/assets/work/3.png',
    live: 'https://buscador-de-cep-sigma.vercel.app/',
    github: 'https://github.com/francovinicius/buscador-de-cep',

  },
  {
    category: 'frontend',
    title: 'Número Secreto',
    description: 'O projeto Jogo do Número Secreto é um jogo desenvolvido para entreter e desafiar os jogadores a adivinharem um número secreto dentro de um intervalo pré-definido. O jogo foi criado utilizando uma API de Reconhecimento de Voz.',
    stack: [
      { name: 'Html5,' }, { name: 'Css3' }, { name: 'Javascript' }, { name: 'Consumo de API' }
    ],
    image: '/assets/work/4.png',
    live: 'https://numero-secreto-kohl.vercel.app/',
    github: 'https://github.com/francovinicius/numero-secreto',

  },

  {
    category: 'frontend',
    title: 'Pagina de Contatos',
    description: 'O projeto Página de Contatos é uma aplicação desenvolvida para fornecer uma página de contatos onde os usuários podem encontrar as informações de contato.',
    stack: [
      { name: 'Reactjs' }
    ],
    image: '/assets/work/5.png',
    live: 'https://eduardowitte.vercel.app/',
    github: 'https://eduardowitte.vercel.app/',

  },

  {
    category: 'frontend',
    title: 'Cadastro de Funcionarios',
    description: 'O projeto Cadastro de Funcionários é uma aplicação desenvolvida para gerenciar o cadastro, a exibição, a atualização e a exclusão de informações de funcionários de uma empresa.',
    stack: [
      { name: 'Html5' }, { name: 'Css3' }, { name: 'Javascript' }
    ],
    image: '/assets/work/6.png',
    live: 'https://cadastro-de-funcionarios-livid.vercel.app/',
    github: 'https://github.com/francovinicius/cadastro-de-funcionarios',

  },

  {
    category: 'Mobile',
    title: 'Spotify-Clone',
    description: 'O Spotify Clone é um projeto desenvolvido em Flutter, com o objetivo de recriar a experiência do aplicativo Spotify.',
    stack: [
      { name: 'Dart' }, { name: 'Flutter' }
    ],
    image: '/assets/work/11.png',
    live: 'https://github.com/francovinicius/Spotify-Clone',
    github: 'https://github.com/francovinicius/Spotify-Clone',

  },
  
  {
    category: 'mobile',
    title: 'cookiesUi',
    description: 'Cookies UI é um aplicativo Flutter criado para aprimorar as habilidades de desenvolvimento em Flutter. Este projeto serve como uma exploração prática das capacidades do Flutter, concentrando-se na construção de uma interface de usuário atraente para um aplicativo temático de cookies.',
    stack: [
      { name: 'Dart' }, { name: 'Flutter' }
    ],
    image: '/assets/work/15.png',
    live: 'https://github.com/francovinicius/cookiesUi',
    github: 'https://github.com/francovinicius/cookiesUi',

  },

  {
    category: 'frontend',
    title: 'SPA - Blog',
    description: 'Esse projeto tem como objetivo mostrar minhas informações pessoais e compartilhar conhecimentos sobre tecnologias, linguagens de programação e assuntos relacionados.',
    stack: [
      { name: 'ReactJs' }, { name: 'Css Modules' }
    ],
    image: '/assets/work/7.png',
    live: 'https://viniciusduarte-blog.vercel.app/',
    github: 'https://github.com/francovinicius/blog-react',

  },

  {
    category: 'frontend',
    title: 'VNC Tech',
    description: 'A landing page foi desenvolvida com foco na captação de leads e apresentação dos principais serviços da agência. O design é moderno e responsivo, garantindo uma navegação fluida em dispositivos móveis e desktops.',
    stack: [
      { name: 'ReactJs' }
    ],
    image: '/assets/work/8.png',
    live: 'https://vnctechnology.vercel.app/',
    github: 'https://github.com/francovinicius/vnctechnology',

  },

  {
    category: 'frontend',
    title: 'Desenvolvendo Apps',
    description: 'Esta landing page foi projetada para converter visitantes em clientes, apresentando de forma clara e atraente os serviços. O design moderno e responsivo garante fácil navegação em qualquer dispositivo, enquanto a paleta de cores e a tipografia profissional reforçam a identidade da marca.',
    stack: [
      { name: 'Reactjs' }
    ],
    image: '/assets/work/9.png',
    live: 'https://desenvolvendoapps.vercel.app/',
    github: 'https://vnctechnology.vercel.app/',

  },


  {
    category: 'frontend',
    title: 'Validacao de Cadastro',
    description: 'Este projeto consiste em um formulário básico de cadastro com validação, desenvolvido utilizando apenas HTML e CSS. Ele contém campos essenciais como nome, e-mail, senha e confirmação de senha.',
    stack: [
      { name: 'Html5' }, { name: 'Css3' }, { name: 'Javascript' },
    ],
    image: '/assets/work/10.png',
    live: 'https://github.com/francovinicius/validacao-cadastro.',
    github: 'https://github.com/francovinicius/validacao-cadastro.',

  },


];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0' initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
      <div className="container mx-auto">
        <div className='flex flex-col gap-[40px] xl:flex-row flex-wrap'>

          {projects.map((project, index) => {

            return <div key={index} className='flex flex-col xl:flex-row gap-[40px] items-center'>

              <div className='flex flex-col order-2 xl:order-none mr-5'>
                <h2 className='text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.title}</h2>
                <h3 className='text-[16px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize mt-5'>{project.category} project</h3>
                <p className='text-white/60 h-[200px] mt-5 mb-[50px] xl:w-[500px]'>{project.description}</p>
                <ul className='flex gap-4'>
                  {project.stack.map((item, index) => {
                    return <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  })}
                </ul>
                <div className='flex items-center gap-4 mt-5'>

                  <Link target='blank' href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link target='blank' href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsGithub className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
                <div className="border border-white/20 mt-5 mb-10"></div>

              </div>
              <div className='order-1 xl:order-none xl:max-w-[500px]'>
                <img className='' src={project.image} alt="" />
              </div>

            </div>
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default Work