import React, {useRef} from 'react';
import './styles/typewriter.css';
import { AnimateKeywords } from "./components/UI/AnimateKeywords";
import GitHubCalendar from "react-github-calendar";
import {HorizontalScrollingCards } from "./components/UI/HorizontalScrollingCards";
import { Button, buttonType } from './components/UI/Button';
import {Icon } from "./components/UI/Icons";
import { handleRedirectionToExternalLink } from './components/Logic/handleRedirectionToExternalLink';
import {Logo } from "./components/UI/Logo";

const myWorks= [{
  title: "CodingRant- A coding challenge platform",
  languages: ["javascript", "typescript", "shell"],
  technologies:["react", "tailwind", "css", "node.js", "postgres", "redis", "docker", "nginx", "git","gcp"],
  shortDescription: "A web application that JS developers preparing for coding interviews can use to level up their JavaScript skills by solving daily coding challenge problems.",
  description: "Built a remote JS code executor micro service built using Node.js and Docker that can run various test cases in parallel and in isolation and returns the correctness and running time of user’s code. Integrated Nginx as API gateway that intercepts users requests and pass it to reliable micro services that might be running in different VM instances depending on payload of the requests. Implemented User Authentication features using JWT in such a way that each microservices can independently authenticate user’s requests without even having to query database. Implemented Bloom Filters using Redis in order to massively speed up the process of checking for available usernames and email during user registration process. Wrote my own simple ORM (Object Relational Mapper) that can generate postgres queries and run them which accelerated my development process by a lot. Wrote entire frontend with solid UI/UX design fundamentals in mind using React.js.",
  topics: ["Web Application Development", "UI/UX design","Backend Development","Microservices", "Contenarization"],
  link: "https://www.codingrant.com/",
  github:"https://github.com/pawanbhatta178/Coding_Rant_Final"
},
  {
  title: "Image Processing",
    languages: ["java", "c++"],

  shortDescription: "Implemented various steps in digital image processing ranging from thresholding, noise filtering, and  image enhancement using various filters and masks. ",
  description: "Image Processing is the low level computer vision where processing unit is 'pixel to pixel'. Here various algorithms might be used to process an image. Usually the first step in image processing is conditioning. While doing conditioning, original image is scanned in order to remove noise and maybe even for smoothing purposes. This step is vital since later steps in Computer Vision depends highly on quality of processed image.  ",
  topics: ["Low Level Computer Vision", "Image Processing"],
  github:"https://github.com/pawanbhatta178/ComputerVision"
  },
  {
    title: "Low/Mid Level Computer Vision",
    languages: ["java", "c++"],
    shortDescription: "Implemented various algorithms that could be a part of low and mid level CV. Various morphological operations like dilution, erosion, opening, and closing using various structuring elements. Also implemented 4 connectedness and 8 connectedness algorithms to group objects in an image and extracting properties of each objects into a property File.",
    description: "Based on low-level image processing, low-level vision tasks could be preformed, such as image matching, optical flow computation and motion analysis. Image matching basically is to find correspondences between two or more images. These images could be the same scene taken from different view points, or a moving scene taken by a fixed camera, or both. Constructing image correspondences is a fundamentally important problem in vision for both geometry recovery and motion recovery. Without exaggeration, image matching is part of the base for vision  ",
    topics: ["Low Level Computer Vision", "Grouping", "Segmentation"],
    github:"https://github.com/pawanbhatta178/ComputerVision"
  },
  {
    title: "Image Compression",
    languages: ["java", "c++"],

    shortDescription: "Implemented various algorithms that can compress image in lossless manner. Some of the techniques used for the compression are: Run length encoding, distance transform, thinning, chain code. ",
    description: "Lossless compression is a class of data compression algorithms that allows the original data to be perfectly reconstructed from the compressed data. By contrast, lossy compression permits reconstruction only of an approximation of the original data, though usually with greatly improved compression rates (and therefore reduced media sizes). ",
    topics: ["Image Compression"],
    github:"https://github.com/pawanbhatta178/ComputerVision"
  },
  {
    title: "Kubernetes Cluster in AWS and GCP",
    languages: ["shell"],
    technologies:["docker", "kubernetes", "aws", "gcp"],
    shortDescription: "Created Kubernetes cluster on both AWS and GCP. Mounted persisted volume using S3 buckets into pods in order provide persistence across sessions for databases.",
    description: "Kubernetes (also known as k8s is an open source container orchestration platform that automates many of the manual processes involved in deploying, managing, and scaling containerized applications. There are many way to configure K8 clusters in cloud environment. There is even ready made k8 environments set up by AWS (EKS) and GCP (K8 engine) which makes our life lot easier as cloud developers.",
    topics: ["Containers", "Container Orchestration", "Cloud Computing", "Virtual Machines"],
    github:"https://github.com/pawanbhatta178/CloudComputing"
  }, {
    title: "Spark Cluster in Cloud",
    languages: ["java", "python"],
    technologies: ["spark", "vms", "aws", "gcp"],
    description: "Apache Spark has its architectural foundation in the resilient distributed dataset (RDD), a read-only multiset of data items distributed over a cluster of machines, that is maintained in a fault-tolerant way. The Dataframe API was released as an abstraction on top of the RDD, followed by the Dataset API. In Spark 1.x, the RDD was the primary application programming interface (API), but as of Spark 2.x use of the Dataset API is encouraged[3] even though the RDD API is not deprecated. The RDD technology still underlies the Dataset API.",
    shortDescription: "Deployed and Configured a Spark Cluster with one master and multiple slaves that has Apache Hadoop as the underlying file system and Apache Spark as the execution engine",
    topics: ["Distributed Computing", "Mapreduce", "Jobs"],
    github:"https://github.com/pawanbhatta178/CloudComputing"
    
}]


  
function App() {
  const navRef = useRef<HTMLElement|null>(null);
  const headerRef = useRef<HTMLElement|null>(null);
  const workRef = useRef<HTMLElement|null>(null);
  const contactRef = useRef<HTMLElement|null>(null);

  const handleScroll = (reference: React.MutableRefObject<HTMLElement|null>) => {
    if (reference.current!==null) {
      reference.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  

  return (
    <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden mx-2 ">
      <nav ref={navRef}  className="h-14 flex items-center ">
        <div className="page-component-wrapper w-full flex justify-between items-center ">
          <Logo/>
          <div className=" w-1/2 lg:w-4/12 flex justify-around primary-text-color">
            <div className="link"  onClick={()=>handleScroll(headerRef)}>About</div>
            <div className="link"  onClick={()=>handleScroll(workRef)}>Works</div>
            <div className="link" onClick={()=>handleScroll(contactRef)}>Contact</div>
          </div>
        </div>
      </nav>
      <header ref={headerRef } className="page-component-wrapper ">
        <div className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">Hi 👋, my name is <span className="primary-text-color"> Pawan Bhatta</span> </div>
           <div className="text-gray-500 max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium ">I'm a full stack software engineer. I like building simple, scalable, and efficient <span className="font-mono text-gray-900 font-bold "> web applications</span>  that can impact lives. My latest project is a coding challenge platform that I created to help people prepare for their coding interviews. </div>
           <div className="text-gray-500 max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">My favorite technologies are:<AnimateKeywords names={["typescript","react","tailwind", "postgres","node.js", "c++", "kubernetes", "docker"] }/>
        </div>
        <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center">
          <Button name="Contact Me" type={buttonType.SECONDARY } onClick={()=>console.log("as") }/>
          <Button name={"My Latest Project"} type={buttonType.NEUTRAL} onClick={() => handleRedirectionToExternalLink("https://www.codingrant.com")} ><Icon className="ml-2" name={"external_link"}/></Button >
        </div>
      </header>
      <section ref={workRef} className="page-component-wrapper text-center">
          <h2 className="z-0 text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-green-700 tracking-tight mb-10">Some of my contributions in 2020/21.</h2>
        <GitHubCalendar style={{ display: "flex", justifyContent: "center" }} username="pawanbhatta178" />
        <p className=" text-gray-500 max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6  mx-auto mb-6 pt-6">I've been involved in several different projects ranging from low level codes written in C++ like <span className="font-mono text-gray-900 font-bold ">CPU schedulers</span>  and <span className="font-mono text-gray-900 font-bold ">memory allocation simulators</span> to mid level codes for <span className="font-mono text-gray-900 font-bold ">image processing</span> and <span className="font-mono text-gray-900 font-bold ">computer vision</span>  to high level full stack <span className="font-mono text-gray-900 font-bold ">web application development</span>.   </p>
      </section>
      <section className="relative">
        <HorizontalScrollingCards cards={myWorks} />
      </section>
      <section ref={contactRef} className="page-component-wrapper text-center">
        
      </section>
      
     
    </div>
  );
}

export default App;
