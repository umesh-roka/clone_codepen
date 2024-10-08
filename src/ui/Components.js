import { Button } from '@material-tailwind/react'
import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,

} from "@material-tailwind/react";
 
const Components = () => {
  return (
    <div className='bg-gray-800 '>
      <div className='grid grid-cols-2 text-white mx-[150px] pt-[50px]'>
      <div className='flex flex-col '>
        <div>
        <h1 className='uppercase font-bold text-5xl pb-5'>The best place to build, test, and discover front-end code.</h1>
        </div>
        <div className=' text-xl pb-5 text-justify'>
        <p>CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.</p>
        </div>
        <Button className='bg-green-300 w-[200px]'>Free Signup</Button>
      </div>
      
      <div className='bg-gray-500 h-[380px] w-[400px] ml-[100px] space-y-3 '>
        <div className='bg-gray-900 h-[100px] w-[230px] rounded mt-[20px] ml-[150px]' >div1</div>
        <div className='bg-gray-900 h-[100px] w-[230px] rounded ml-[200px]'>div2</div>
        <div className='bg-gray-900 h-[100px] w-[230px] rounded ml-[140px]'>div3</div>
      </div>
      </div>

      {/* newpart */}
      <div className='flex gap-[50px] mx-[150px] pt-[50px]'>
       <BuildandTest/>
       <LearnadnDisCover/>
       <ShareYourWork/>
      </div>


{/* 6boxes */}

      <div className='bg-gray-900'>
      <div className='mt-6 grid grid-cols-3 space-y-12 text-center mx-[150px] justify-center'>
        <div className='mt-[47px] h-[310px] bg-gray-800 rounded-xl text-white w-[325px]'>box1</div>
        <div className=' h-[310px] bg-gray-800 rounded-xl text-white w-[325px]'>box2</div>
        <div className=' h-[310px] bg-gray-800 rounded-xl text-white w-[325px]'>box3</div>
        <div className=' h-[310px] bg-gray-800 rounded-xl text-white w-[325px]'>box4</div>
        <div className=' h-[310px] bg-gray-800 rounded-xl text-white w-[325px]'>box5</div>
        <div className=' h-[310px] bg-gray-800 rounded-xl text-white w-[325px]'>box6</div>
        
      </div>
      <div className='uppercase ml-[650px] space-x-4 mt-10 pb-10 '><Button  className='bg-blue-gray-600 w-[80px]'>pre</Button> <Button className='bg-blue-gray-600 w-[80px]'>Next</Button></div>
      </div>

{/* below 6boxes */}

<div className='mx-[150px] text-center mt-14 text-white'>
  <h1 className='text-2xl font-bold pb-4'>A front-end environment made for testing and sharing
  </h1>
  <p className='text-blue-300'>Explore the Editor</p>
      <div className='flex mt-5 '>

        <div className='h-[500px]  text-justify space-y-14 w-[400px]'>
       <h1>Support For the Way You Code</h1>
       <h1>Keep Your Pens Private
       </h1>
       <h1>Embed Pens
       </h1>
       <h1>Asset Hosting
       </h1>
       <h1>Build Entire Projects
       </h1>
       <h1>Collab Mode
       </h1> 
        </div>
        <div className='ml-11'>
          <img className='h-[500px]' src='https://cpwebassets.codepen.io/assets/packs/editor-collab-90815f9b83fcbdbd3ef7df4573ed9b57.png' alt=''/>
        </div>
      </div>
    </div>



    <div className='pb-10 mt-[100px] flex mx-[150px]  text-blue-300'>
      <div className='flex gap-5'>
      <div className='h-[250px] w-[170px] hover:text-white transition duration-300 ease-in transform hover:scale-110  rounded-lg bg-gray-900'>
        <img height={230} width={130} className='ml-[20px] mt-10' src="https://cdn.iconscout.com/icon/free/png-256/free-react-3521666-2945110.png?f=webp&w=256" alt="" />
        <h1 className=' text-center text-2xl pt-5 '>React</h1>
      </div>
      
      <div className='h-[250px] w-[170px] hover:text-white transition duration-300 ease-in transform hover:scale-110  rounded-lg bg-gray-900'>
      <img height={230} width={130} className='ml-[20px] mt-10' src="https://static-00.iconduck.com/assets.00/vue-icon-512x439-f6q4zral.png" alt="" />
      <h1 className=' text-center text-2xl pt-[40px]'>Vue</h1>
      </div>

      <div className='h-[250px] w-[170px] hover:text-white transition duration-300 ease-in transform hover:scale-110  rounded-lg bg-gray-900'>
      <img height={230} width={130} className='ml-[20px] mt-10' src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" alt="" />
      <h1 className=' text-center text-2xl pt-[75px]'>TailWind</h1>
    
      </div>

      <div className='h-[250px] w-[170px] hover:text-white transition duration-300 ease-in transform hover:scale-110  rounded-lg bg-gray-900'><img height={230} width={130} className='ml-[20px] mt-10' src="https://cdn.iconscout.com/icon/free/png-256/free-sass-13-1175092.png?f=webp" alt="" />
      <h1 className=' text-center text-2xl pt-5'>Sass</h1>
      </div>

      <div className='h-[250px] w-[170px] hover:text-white transition duration-300 ease-in transform hover:scale-110  rounded-lg bg-gray-900'>
      <img height={230} width={130} className='ml-[20px] mt-[25px]' src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" alt="" />
      <h1 className=' text-center text-2xl pt-[15px]'>Gsap</h1>
      </div>
      </div>
      <div className='h-250px flex ml-5 flex-col text-white'>
     <h1 className='text-2xl pb-3'>Get Started Quicker</h1>
     <p className='mb-4 w-[200px]'>Get inspiration from Pens using frameworks, libraries, and design patterns. Then, start your own with premade templates.
</p>
<button className='bg-none text-left text-blue-300'>Explore Topics</button>
    </div>
    </div>

{/* two panel */}
    <div className=' mx-[150px] pb-10 text-white mt-[100px]'>
      {/* panel1 */}
      <div className=' bg-gray-900 h-[300px] rounded w-full pt-[50px]  flex gap-7'>
        <div className='ml-14'>
          <img height={300} width={400} src='https://static4.buysellads.net/uu/7/151317/1719328425-Codepen_Deque_600x400.png' alt=''/>
        </div>
        <div className='mr-9 text-center'>
        <h1 className='font-bold text-2xl text-justify'>axe DevTools Extension</h1>
        <p className='w-[800px] text-justify py-5'> Scan your web app with the most trusted accessibility testing tool. Find issues in just minutes with automation and AI-powered tools. Get shareable reports with issue details, severity, info on how to fix, screenshots, and why the issue matters. Build a more accessible web app with axe DevTools.</p>

        <button className='bg-green-400 px-2 py-1 rounded float-left'>Get started for free</button>
        </div>



      </div>
      {/* panel2 */}
      <div className='mt-10 w-full h-[400px]  text-center rounded bg-gray-900'>
        <h1 className='font-bold text-2xl py-5'>Bring the Whole Team</h1>
        <p className='mx-[250px]'>Each team and team member gets all the features of a PRO membership. That means the Team can do things like upload Assets, use features like Collab Mode, Professor Mode, Presentation Mode, and Live View, and apply custom CSS to Posts, Profiles, and Embeds.</p>
        <button className='bg-green-400 px-2 py-1 rounded my-5'> Start Team</button>
        <h1 className='font-bold text-2xl'>Loved by hundreds of teams, including:</h1>
        <div className='mt-3 flex mx-[150px] gap-[40px]'>
          <img height={80} width={40} src='https://cpwebassets.codepen.io/assets/packs/airbnb-cb44d3434e60956b120c2cfd2afa9a23.png' alt=''/>

          <img height={40} width={90} src='https://cpwebassets.codepen.io/assets/packs/grubhub-f05150a98afe6175f221f4bc75ac3372.png' alt=''/>
          
          <img height={80} width={40} src='https://cpwebassets.codepen.io/assets/packs/square-e4a6fa8c30a53180c593a11aeb1618c2.png' alt=''/>
          
          <img height={80} width={100} src='https://cpwebassets.codepen.io/assets/packs/netflix-8b4f0b76ad5ccaa1b6326267be6c396f.png' alt=''/>
          
          <img height={60} width={40} src='https://cpwebassets.codepen.io/assets/packs/adobe-0d9fee1af16f2db73270e52fbdcf4fe8.png' alt=''/>
          
          <img height={80} width={80} src='https://cpwebassets.codepen.io/assets/packs/salesforce-63204abcda6bd196c6a6da3bb4911510.png' alt=''/>
          
          <img height={80} width={130} src='https://cpwebassets.codepen.io/assets/packs/microsoft-0859118499110df3a66f00a999a53a40.png' alt=''/>
          
          <img height={80} width={60} src='https://cpwebassets.codepen.io/assets/packs/lyft-87acc577a28f7c5fbafbed09b543dd91.png' alt=''/>
          
          <img height={80} width={80} src='https://cpwebassets.codepen.io/assets/packs/ibm-c6d225a3817a57e66f67fdcb18d1fe04.png' alt=''/>
        </div>
      </div>
    </div>
  
  {/* footer */}


    </div>
  )
}

export default Components


export function BuildandTest() {
  return (
    <Card className="mt-6 h-[310px] bg-gray-900 text-white w-[340px]">
      <CardHeader color="blue-gray" className="h-[150px] bg-black w-[100px]">
        <img height={80} width={60} className='ml-4'
          src="https://cpwebassets.codepen.io/assets/packs/icon-build-0f21c66ed03bfb36c597636d27ca621e.svg"
          alt="card"
        />
      </CardHeader>
      <CardBody >
        <Typography  className="mb-2 font-bold text-2xl">
        Build & Test
        </Typography>
        <Typography>
        Get work done quicker by building out entire projects or isolating code to test features and animations. Want to keep it all under wraps? Upgrade to a PRO account to keep your work private.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 uppercase">
        <Button className='bg-blue-gray-700'>Try the Editor</Button>
      </CardFooter>
    </Card>
    
  );
}

export function LearnadnDisCover() {
  return (
    <Card className="mt-6 h-[310px] bg-gray-900 text-white w-[340px]">
    <CardHeader color="blue-gray" className="h-[200px] bg-black w-[100px]">
        <img height={80} width={60} className='ml-4'
          src="https://cpwebassets.codepen.io/assets/packs/icon-learn-b1311620e99cea826f259aa2f7750940.svg"
          alt="card"
        />
      </CardHeader>
    <CardBody >
      <Typography  className="mb-2 font-bold text-2xl">
      Learn & Discover  </Typography>
      <Typography className='text-[15px]'>
      Want to upgrade your skills and get noticed? Participating in CodePen Challenges is a great way to try something new. We frequently feature these Pens on our homepage and across social media!
      </Typography>
    </CardBody>
    <CardFooter className="pt-0 uppercase">
      <Button className='bg-blue-gray-700'>Join this week's challenge</Button>
    </CardFooter>
  </Card>
  
    
  );
}


export function ShareYourWork() {
  return (
    <Card className="mt-6 h-[310px] bg-gray-900 text-white w-[340px]">
   <CardHeader color="blue-gray" className="h-[150px] bg-black w-[100px]">
        <img height={60} width={40} className='ml-4'
          src="https://cpwebassets.codepen.io/assets/packs/icon-share-910c683bbac21bf41fcf9aab64ebc957.svg"
          alt="card"
        />
      </CardHeader>
    <CardBody >
      <Typography  className="mb-2 font-bold text-2xl">
      Share Your Work      </Typography>
      <Typography>
      Become a part of the most active front-end community in the world by sharing work. Presenting at a conference? Show your code directly in the browser with Presentation Mode.
      </Typography>
    </CardBody>
    <CardFooter className="pt-0 uppercase">
      <Button className='bg-blue-gray-700'>Explore Trending</Button>
    </CardFooter>
  </Card>
  
  );
}