import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import { TechIcon } from "@/components/TechIcon";

import JavaScriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import GithubIcon from "@/assets/icons/github.svg"

import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon
  },
  {
    title: 'CSS3',
    iconType: CssIcon
  },
  {
    title: 'React',
    iconType: ReactIcon
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon
  },
  {
    title: 'Github',
    iconType: GithubIcon
  }
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    top: '5%',
    left: '5%'
  },
  {
    title: 'Photography',
    emoji: '📷',
    top: '5%',
    left: '50%'
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    top: '40%',
    left: '35%'
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    top: '35%',
    left: '10%'
  },
  {
    title: 'Music',
    emoji: '🎵',
    top: '45%',
    left: '70%'
  },
  {
    title: 'Fitness',
    emoji: '🏋️',
    top: '65%',
    left: '5%'
  },
  {
    title: 'Reading',
    emoji: '📚',
    top: '70%',
    left: '45%'
  }
]

export const AboutSection = () => {
  return <div className="py-20">
    <div className="container">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me."
      />
      <div className="mt-20 flex flex-col gap-8">
        <Card className="h-[320px]">
          <CardHeader
            title="My Reads"
            description="Explore the books shaping my perspective."
          />
          <div className="w-40 mx-auto mt-8">
            <Image src={bookImage} alt="book cover" />
          </div>
        </Card>
        <Card className="h-[320px] p-0">
          <CardHeader
            title="My Toolbox"
            description="Explore the technologies and tools I used to craft exceptional digital experiences."
            className="px-6 pt-6"
          />
          <ToolboxItems 
            items={toolboxItems}
            className="mt-6"
          />
          <ToolboxItems 
            items={toolboxItems}
            className="mt-6"
            itemsWrapperClassName= "-translate-x-1/2"
          />
        </Card>
        <Card className="h-[320px] p-0 flex flex-col">
          <CardHeader
            title="Beyond the Code"
            description="Explore my interest and hobbies beyond the digital realm"
            className="px-6 py-6"
          />

          <div className="relative flex-1">
            {hobbies.map(hobby => (
              <div 
                key={hobby.title}
                className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                style={{
                  top: hobby.top,
                  left: hobby.left
                }}
              >
                <span className="font-medium text-gray-950"> {hobby.title} </span>
                <span> {hobby.emoji} </span>
              </div>
            ))}
          </div>

        </Card>
        <Card>
          <Image src={mapImage} alt="map" />
          <Image src={smileMemoji} alt="smiling memoji" />
        </Card>
      </div>
    </div>;
  </div>
};
