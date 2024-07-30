import React from 'react'
import java from '../../public/java.png'
import html from '../../public/html.png'
import express from '../../public/express.png'
import css from '../../public/css.jpg'
import mongodb from '../../public/mongodb.jpg'
import python from '../../public/python.webp'
import reactjs from '../../public/reactjs.png'
import nodejs from '../../public/node.png'

function PortFolio() {
    const cardItem = [
        {
            id: 1,
            logo: mongodb,
            name: 'MongoDB',
            description: 'NoSQL database known for its flexibility in handling unstructured data and scalability in distributed environments, ideal for modern applications.'
        },
        {
            id: 2,
            logo: express,
            name: 'Express',
            description: 'Minimalist web framework for Node.js, simplifying the creation of robust APIs and web applications with middleware and routing capabilities.'
        },
        {
            id: 3,
            logo: reactjs,
            name: 'ReactJS',
            description: 'JavaScript library for building interactive user interfaces, known for its component-based architecture and virtual DOM rendering.'
        },
        {
            id: 4,
            logo: nodejs,
            name: 'NodeJS',
            description: 'JavaScript runtime environment enabling server-side execution of JavaScript, widely used for building scalable and efficient network applications.'
        },
        {
            id: 5,
            logo: python,
            name: 'Python',
            description: 'High-level programming language emphasizing readability and simplicity, widely used for web development, scientific computing, and automation.'
        },
        {
            id: 6,
            logo: java,
            name: 'Java',
            description: 'Object-oriented programming language renowned for its platform independence, strong community support, and suitability for building enterprise-level applications.'
        },
        {
          id: 1,
          logo: html,
          name: 'HTML',
          description: 'Markup language essential for creating the structure of web pages, using tags to define elements like headings forming the backbone of web content.'
        },
        {
          id: 1,
          logo: css,
          name: 'CSS',
          description: 'enabling designers to control layout, colors, fonts, and responsiveness for a visually appealing and user-friendly web experience..'
        },
    ]
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
      <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
      <span className='underline font-semibold'>Featured Projects</span>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              className="md:w-[330px] md:h-[385px] border-[2px] border-gray-300 rounded-lg shadow-lg p-3 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-32 h-32 rounded-full border-2 border-gray-300 mx-auto mb-4"
                alt=""
              />
              <div class="text-center">
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                {description}
                </p>
                <br />
                <div className="justify-center space-x-4 left-0 right-0">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortFolio
PortFolio