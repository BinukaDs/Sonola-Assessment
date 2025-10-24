import SideBar from '../components/navigation/Sidebar';
import Navbar from '../components/navigation/Navbar'
import Button from '../components/Button'
import { BsPlusSquareFill } from "react-icons/bs";
import illustrations from "../assets/images/Illustrations.png"
import gradientBg from "../assets/images/Gradient.png"
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight, FaRegClock } from "react-icons/fa6";
import TemplateCard from '../components/TemplateCard';

// Template images
import webPagesImg from "../assets/images/for-you/web-pages.png"
import presentationsImg from "../assets/images/for-you/presentations.png"
import socialMediaImg from "../assets/images/for-you/social-media.png"
import salesPitchImg from "../assets/images/for-you/sales-pitch.png"

// Project images
import documents from "../assets/images/recents/document.png"
import webPages1 from "../assets/images/recents/website.png"
import secondCut from "../assets/images/recents/video.png"
import webpages2 from "../assets/images/recents/web-pages.png"

import ProjectCard from '../components/ProjectCard';
import { UpdateTag, LiveTag, DocsTag, ReviewTag } from '../components/StatusTags';

import { FadeIn } from '../components/Animations';
import { FadeInUp } from '../components/Animations';






const Home = () => {
  const templates = [
    { image: webPagesImg, title: "Web Pages", desc: "Good products deserves good websites." },
    { image: presentationsImg, title: "Presentations", desc: "Easily edit our animated templates." },
    { image: socialMediaImg, title: "Social Media", desc: "Everything you need for socials." },
    { image: salesPitchImg, title: "Sales Pitch", desc: "Turn your dreams into reality." },
  ]
  const projects = [
    { image: documents, title: "Document", author: "Mark", date: "May 14, 2025", tags: [<DocsTag />] },
    { image: webPages1, title: "Web Pages", author: "Mark", date: "May 14, 2025", tags: [<UpdateTag />] },
    { image: secondCut, title: "60 Second Cut", author: "Caroline", date: "May 14, 2025" },
    { image: webpages2, title: "Web Pages", author: "Mark", date: "May 14, 2025", tags: [<LiveTag />, <ReviewTag />] },
  ]
  return (
    <div className=' w-full h-full  dark:bg-[#1F1F1F]'>
      <SideBar />

      <div className='md:ml-20 px-6 md:px-12 flex flex-col gap-5'>
        <Navbar />

        <FadeIn>
          <div className='h-80 relative overflow-hidden w-full flex justify-between bg-[#F7F2FFE5] bg-[url(assets/images/background-svg.png)] rounded-2xl'>
            <div className='flex z-10 flex-col h-full  gap-2 p-12 justify-between'>
              <FadeInUp>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-3xl'>Getting started <br />in Sonola</h1>
                  <p className='text-gray-600'>Create intriguing marketing contents <br /> with ease! </p>
                </div>
              </FadeInUp>

              <Button variant='purple'>
                <span>
                  <BsPlusSquareFill className='text-white' />
                </span>
                Start creating now
              </Button>

            </div>

            <img src={illustrations} alt="Illustrations" className='lg:block hidden' />
            <img src={gradientBg} alt="Gradientbg" className='absolute bg-bottom-right w-full h-full z-0' />
          </div>
        </FadeIn>

        <section className='mt-5 w-full flex flex-col gap-2'>
          <FadeIn>
            <div className='w-full flex justify-between'>
              <div className="flex gap-2  dark:text-dark-text items-center justify-center">
                <FaRegStar />
                <p>For you</p>
              </div>
              <button className="group cursor-pointer flex gap-2  dark:text-dark-text items-center justify-center">
                <p className='group-hover:'>View all templates</p>
                <FaArrowRight className='group-hover:translate-x-1.5 transition-all' />
              </button>
            </div>
          </FadeIn>

          <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {
              templates.map((template, index) => {
                return (
                  <FadeInUp delay={index * 0.15}>
                    <TemplateCard
                      key={index}
                      image={template.image}
                      title={template.title}
                      desc={template.desc}
                    />
                  </FadeInUp>
                )
              })
            }
          </div>
        </section>
        <section className='mt-5 mb-5 w-full flex flex-col gap-2'>
          <FadeIn>
            <div className='w-full flex justify-between'>
              <div className="flex gap-2  dark:text-dark-text items-center justify-center">
                <FaRegClock />
                <p>Recents</p>
              </div>
              <button className="group cursor-pointer flex gap-2  dark:text-dark-text items-center justify-center">
                <p className='group-hover:'>See in projects</p>
                <FaArrowRight className='group-hover:translate-x-1.5 transition-all' />
              </button>
            </div>
          </FadeIn>

          <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {
              projects.map((template, index) => {
                return (
                  <FadeInUp delay={index * 0.15}>
                    <ProjectCard
                      key={index}
                      image={template.image}
                      title={template.title}
                      author={template.author}
                      date={template.date}
                      tags={template?.tags}
                    />
                  </FadeInUp>
                )
              })
            }
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home