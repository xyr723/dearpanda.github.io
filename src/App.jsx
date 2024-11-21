import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import coffeeIcon from './assets/coffee.svg'
import AILogo from './assets/aislogo.svg'
import transform from './assets/transform.svg'
import js from './assets/js.svg'
import achievement from './assets/achievement.svg'
import './App.css'

function App() {
  const apps = [
    {
      name: 'Vite',
      icon: viteLogo,
      url: 'https://vite.dev',
      className: 'vite'
    },
    {
      name: 'React',
      icon: reactLogo,
      url: 'https://react.dev',
      className: 'react'
    },
    {
      name: '咖啡',
      icon: coffeeIcon,
      url: '/coffee',
      className: 'coffee'
    },
    {
      name: 'AI工具集',
      icon: AILogo,
      url: 'https://thefreeai.cn/',
      className: 'ai'
    },
    {
      name: '在线转换器',
      icon: transform,
      url: 'https://transform.tools/html-to-jsx',
      className: 'transform'
    },
    {
      name: 'Js语法',
      icon: js,
      url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export',
      className: 'js'
    },
    {
      name: '原神成就',
      icon: achievement,
      url: 'https://cocogoat.work/achievement/wonders-of-the-world',
      className: 'achievement'
    }
  ]

  return (
    <div className="container">
      <h1>Hi~欢迎来到这里，这里是我的工具箱╲(｡◕‿◕｡)╱</h1>
      <div className="app-grid">
        {apps.map((app) => (
          <a 
            key={app.name}
            href={app.url}
            className="app-icon"
            target={app.url.startsWith('http') ? '_blank' : '_self'}
          >
            <img 
              src={app.icon} 
              alt={app.name} 
              className={app.className}
            />
            <span>{app.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default App
