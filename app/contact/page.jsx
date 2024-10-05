import React from 'react'

import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'


const contacts = {
  title: 'Formação',
  description: 'Hoje estou cursando Pós-Graduação em Desenvolvimento Full Stack na PUC Minas, porém em minha tragetória me graduei em Matemática e Análise e Desenvolvimento de Sistemas nas universidades abaixo mencionadas:',
  items: [
    {
      item_name: "Phone",
      item_date: '+55 24 99987-9994',
      icon: <FaWhatsapp />,
      link: 'https://api.whatsapp.com/send?phone=5524999879994&text=Ol%C3%A1',

    },
    {
      item_name: "E-mail",
      item_date: 'duartevini.dev@gmail.com',
      icon: <IoMailOutline />,
      link: 'mailto:duartevini.dev',

    },
    {
      item_name: "linkedin",
      item_date: 'vinicius-franco-duarte',
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/vinicius-franco-duarte/',

    },
  ]
}


const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center xl:text-left mt-[5rem]">
      <span className="text-xl mb-[2rem]">Clique no icone abaixo para entrar em contato comigo por:</span>

      <div value='contacts' className='w-full'>
        <div className='flex flex-col gap-[30px] text-center xl:text-left'>

          <div className='h-[400px] flex items-center justify-center'>
            <ul className='grid grid-cols-1 items gap-[10px]'>
              {contacts.items.map((item, index) => {
                return <li key={index} className='bg-[#232329] h-[90px] xl:w-[350px] py-6 px-10 flex flex-col justify-center'>
                  <div className='flex gap-5 items-center'>
                    <a href={item.link} target='_blank' className='text-accent text-accent-hover'>{item.icon}</a>
                    <div className='flex flex-col items-start'>
                      <p className='text-white/60'>{item.item_name}</p>
                      <p className='max-w[260px] min-h-[50px]'>{item.item_date}</p>
                    </div>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact