import React, {useState, useEffect}  from "react"
import emailjs from '@emailjs/browser'


const Result = () => {
  return (
      <p>Your message has been successfully sent!</p>
  )
}

const Contact = () => {

  const [ data, setData ] = useState({name:"", lastName:"", email:"", phone:"", message:""})
    const [ result, showResult ] = useState(false)
    const [ validEmail, setValidEmail ] = useState(false)


    useEffect(() => {
       
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const parallaxElements = document.querySelectorAll('.parallax-element');
  
        parallaxElements.forEach((element) => {
          const speed = element.dataset.speed;
          element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
      };
  
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData({...data, [name]:value})
    }

    const twoCalls = (e) => {
        onChangeValidEmail();
        handleChange(e)
    }

    const onChangeValidEmail = () => {
        let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (re.test(data.email)) {setValidEmail(false)}
        else setValidEmail(true)
    }
    const EmailResponse = () => {
        return (
            <p>**Please enter a valid email**</p>
        )
    }

    const sendMail = (e) => { //EmailJS documentation
        e.preventDefault()

        if (!validEmail) {
        emailjs
        .sendForm('service_0bd37pt', 'template_sasqli3', e.target, 'iauEh19za_KMIe1hP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setData("")
        setData({message:""})
        showResult(true)
    };
}

setTimeout(() => {
  showResult(false)
}, 10000)

return (
  
    <div className="z-10 min-h-screen text-3xl text-center bg-fixed bg-center bg-no-repeat bg-cover parallax-element bg-BG font-Raleway">
      <div className="fixed inset-0 flex flex-col items-center justify-center w-screen pt-48 overflow-x-hidden bg-color-BG bg-opacity-60">
        <h1 className="pt-32 text-5xl text-black lg:pt-72">Contact <span className="text-black">Us</span></h1>
        <p className="pt-4 text-xs text-black sm:text-base lg:pt-10 lg:text-lg">Please feel free to reach out with any questions here or email us at info@warmhospitalitygroup.com</p>

        <div className="flex items-center justify-center m-4 lg:pt-20 lg:my-0 sm:w-11/12 sm:h-full ">
            <div className="w-full">
                <form className="flex flex-col mx-auto text-center lg:pt-10"  method="post" onSubmit={sendMail}>
                    <div className="flex mb-2 space-x-5 sm:space-x-10">
                        <div className="flex flex-col w-full">
                            <label className="flex text-xs text-black sm:text-base lg:text-lg">First Name (required)</label>
                            <input className="w-full p-2 text-xs border-2 border-black border-solid h-7 lg:h-auto sm:text-base lg:text-lg lg:mt-2" 
                                type='text' name='name' id="" onChange={handleChange} value={data.name} placeholder="First name" required/>
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="flex text-xs text-black sm:text-base lg:text-lg">Last Name</label>
                            <input className="w-full p-2 px-2 text-xs border-2 border-black border-solid sm:text-base h-7 lg:h-auto lg:text-lg lg:mt-2" 
                                type="text" name="lastName" id="" onChange={handleChange} value={data.lastName} placeholder="Last name"></input>
                        </div>
                    </div>
                    <label className="flex text-xs text-black sm:text-base lg:text-lg lg:pt-2">Email (required)</label>
                    <input className="flex text-xs border-2 h-7 border-black border-solid lg:mt-2 sm:text-base lg:px-[12px] lg:text-lg lg:h-auto lg:py-[8px] px-2" 
                        type='email' name='email' id="" onChange={twoCalls} value={data.email} placeholder="example@gmail.com" required
                    />
                    <h2 className= "text-base font-semibold text-center text-red-500 underline ">{validEmail ? <EmailResponse/> : null }</h2>
                    <label className="flex text-xs text-black sm:text-base lg:text-lg lg:pt-2 ">Phone Number</label>
                    <input className="flex text-xs border-2 h-7 border-black border-solid lg:mt-2 sm:text-base lg:px-[12px] lg:h-auto lg:text-lg lg:py-[8px] px-2" 
                        type='phone' name='phone' id="" onChange={handleChange} value={data.phone} placeholder="+1 (xxx)-xxx-xxxx"
                    />
                    <label className="flex text-xs text-black lg:text-lg sm:text-base lg:pt-2">Message (required)</label>
                    <textarea className="flex px-2 mb-5 text-xs border-2 border-black border-solid sm:text-base lg:mb-8 lg:text-lg lg:mt-2" 
                        name='message' id='' cols='30' rows='10' onChange={handleChange} value={data.message} placeholder="Enter message here..." required
                    />
                    <div className="flex justify-center mb-0 lg:h-auto">
                        <button className="flex items-center justify-center w-48 text-base text-center text-white bg-black rounded-lg bt-black sm:text-lg hover:bg-white hover:text-black lg:w-20 lg:mb-4" type='submit'>Send</button>
                    </div>
                    
                    <h2 className= "pt-5 text-lg">{result ? <Result/> : null}</h2> 
                </form>  
            </div>
        </div>
        </div>
    </div>

  )
}

export default Contact