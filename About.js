import React, {useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        
         color: 'white',
        backgroundColor: 'black' 
    })
    const [btntext, setBtntext] = useState("Enable Dark Mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtntext("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtntext("Enable Light Mode")

        }
    }
  return (
    <div className="container" style={myStyle}> 
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Top Expertise
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> we pride ourselves on being at the forefront of technology. Our team of seasoned professionals brings unparalleled expertise to every project. From software development and cloud solutions to cybersecurity, we deliver innovative solutions that drive business growth. With a commitment to excellence and a passion for problem-solving, we’re your trusted partner in the digital age.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Quality Management
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> Quality management is the backbone of successful projects. We adhere to a rigorous quality management system (QMS). Our QMS ensures consistency, standardization, and continuous improvement across all processes. By minimizing errors and enhancing operational efficiency, we deliver top-notch products and services.


                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Empowering the vision
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the third item's accordion body.</strong> Empowering the vision-we’re your trusted partner throughout the entire development journey. Whether you need detailed specifications, eye-catching designs, rigorous testing, robust coding, or performance validation, we’ve got you covered. Our full-cycle development services are designed to meet your business needs and deliver exceptional results. Let’s build something great together.


                </div>
                </div>
            </div>
        </div>
        <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div>
    </div>
  )
  
}
