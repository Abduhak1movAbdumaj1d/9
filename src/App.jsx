import './App.css'
import Infocard from './components/infocard/infocard'
import Usercard from './components/usercard/usercard'



function App() {
  return (
    <div className='vvv'>

    <h1>User Card</h1>
    <div className="user-card container" >
        <Usercard  ism="Emily Johnson" kasb="Product Manager" iwjoyi=" Product Development"> </Usercard>
        <Usercard  ism="Emily Johnson" kasb="Product Manager" iwjoyi=" Product Development"> </Usercard>
        <Usercard  ism="Emily Johnson" kasb="Product Manager" iwjoyi=" Product Development"> </Usercard>
        <Usercard  ism="Emily Johnson" kasb="Product Manager" iwjoyi=" Product Development"> </Usercard>
        <Usercard  ism="Emily Johnson" kasb="Product Manager" iwjoyi=" Product Development"> </Usercard>
        <Usercard  ism="Emily Johnson" kasb="Product Manager" iwjoyi=" Product Development"> </Usercard>
        <Usercard  ism="Emily Johnson" kasb="Product Manager" iwjoyi=" Product Development"> </Usercard>
        <Usercard  ism="Emily Johnson" kasb="Product Manager" iwjoyi=" Product Development"> </Usercard>
      </div>
    <h1>Info Card</h1>
      <div className="imfo-card container">
        <Infocard malumot="Unraveling the Mysteries of the Ocean" yozuv="From the mesmerizing marine life that inhabits the coral reefs to the 
        njh djfbvhnjbshd kejbhfd">
        </Infocard>.
        <Infocard malumot="Unraveling the Mysteries of the Ocean" yozuv="From the mesmerizing marine life that inhabits the coral reefs to the 
        kihugdsvc hgv bhvg jhb">
        </Infocard>
        <Infocard malumot="Unraveling the Mysteries of the Ocean" yozuv="From the mesmerizing marine life that inhabits the coral reefs to the 
        bhavgsc jhvsg xbhv s">
        </Infocard>
        <Infocard malumot="Unraveling the Mysteries of the Ocean" yozuv="From the mesmerizing marine life that inhabits the coral reefs to the 
         ajhsxnskjb hkjbsh dxc. ">
        </Infocard>
        <Infocard malumot="Unraveling the Mysteries of the Ocean" yozuv="From the mesmerizing marine life that inhabits the coral reefs to the
         asxhgv snb uhvs x ">
        </Infocard>
      </div>
    </div>
  )
}

export default App
