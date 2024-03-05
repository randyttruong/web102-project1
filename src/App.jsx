import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const k1 = { modelName: "Tokyo60", 
         companyName: "Drop + Tokyo", 
         price: "$160", };
  const k2 = { modelName: "MK870 Barebones TKL Mechanical Keyboard", 
         companyName: "Flesports", 
         price: "$60", };
  const k3 = { modelName: "NJ80 Barebones TKL Wireless Mechanical Keyboard", 
         companyName: "Keydous", 
         price: "$130", };
  const k4 = { modelName: "Planck Mechnical Keyboard Kit V7", 
         companyName: "Drop + OLKB", 
         price: "$99", };
  const k5 = { modelName: "ID80 Crystal Gasket Barebones Keyboard Kit", 
         companyName: "IDOBAO", 
         price: "$219", };
  const k6 = { modelName: "Zoo65 Barebones Gasket Mount Keyboard Kit", 
         companyName: "MOMOKA", 
         price: "$210", };
  const k7 = { modelName: "CTRL v1 High-Profile Dark Purple Barebones Keyboard", 
         companyName: "Drop", 
         price: "$129", };
  const k8 = { modelName: "ID87 V2 TKL Mechnical Keyboard Kit", 
         companyName: "IDOBAO", 
         price: "$179", };
  const k9 = { modelName: "Preonic Keyboard MX Kit V3", 
         companyName: "Drop + OLKB", 
         price: "$160", };
  const k10 = {modelName: "CTRL v1 Barebones Mechnical Keyboard", 
         companyName: "Drop", 
         price: "$150", };
  const keyboards = [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10]; 
  const links = [
    "https://drop.com/buy/massdrop-x-tokyo-keyboard-tokyo60-keyboard-kit",
    "https://drop.com/buy/flesports-mk870-tkl-hot-swappable-mechanical-keyboard",
    "https://drop.com/buy/keydous-nj80-barebones-bluetooth-rgb-hot-swappable-keyboard",
    "https://drop.com/buy/planck-mechanical-keyboard",
    "https://drop.com/buy/idobao-id80-crystal-gasket-barebones-keyboard",
    "https://drop.com/buy/momoka-zoo65-gasket-hot-swappable-mechanical-keyboard-kit",
    "https://drop.com/buy/drop-ctrl-high-profile-dark-purple-barebones-keyboard",
    "https://drop.com/buy/idobao-id87-v2-tkl-mechanical-keyboard-kit",
    "https://drop.com/buy/preonic-mechanical-keyboard",
    "https://drop.com/buy/drop-ctrl-barebones-mechanical-keyboard",
  ]

  return (
    <>
      <div>
        <div>
          <h1 className="logo">Randy's Keyboard Emporium</h1>
        </div>
        <div className='flex-container'>
        { 
          keyboards.map((k, i) => { 
            return (
            <Card image={`${i+1}.png`}
              modelName={k.modelName} 
              companyName={k.companyName} 
              price={k.price} 
              key={i}
              listing={links[i]}
              /> 
              )
          })
        }
        </div>
      </div> 
    </>
  )
}

export default App
