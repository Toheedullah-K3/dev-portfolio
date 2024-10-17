import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StartIcon from "@/assets/icons/star.svg"
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
    emoji: '🎨'
  },
  {
    title: 'Photography',
    emoji: '📷'
  },
  {
    title: 'Gaming',
    emoji: '🎮'
  },
  {
    title: 'Hiking',
    emoji: '🥾'
  },
  {
    title: 'Music',
    emoji: '🎵'
  },
  {
    title: 'Fitness',
    emoji: '🏋️'
  },
  {
    title: 'Reading',
    emoji: '📚'
  }
]

export const AboutSection = () => {
  return <div>
    <SectionHeader
      eyebrow="About Me"
      title="A Glimpse Into My World"
      description="Learn more about who I am, what I do, and what inspires me."
    />
    <div>
      <Card>
        <div>
          <StartIcon />
          <h3>My Reads</h3>
          <p>Explore the books shaping my perspective.</p>
        </div>
        <Image src={bookImage} alt="book cover" />
      </Card>
      <Card>
        <div>
          <StartIcon />
          <h3>My Reads</h3>
          <p>Explore the technologies and tools I used to craft exceptional digital experiences.</p>
        </div>
        <div>
          {
            toolboxItems.map(item => (
              <div key={item.title}>
                <TechIcon
                  component={item.iconType}
                />
                <span> {item.title} </span>
              </div>
            ))
          }
        </div>
      </Card>
      <Card>
        <div>
          <StartIcon />
          <h3>Beyond the Code</h3>
          <p>
            Explore my interest and hobbies beyond the digital realm
          </p>
          <div>
            { hobbies.map(hobby => (
              <div key={hobby.title}>
                <span> {hobby.title} </span>
                <span> {hobby.emoji} </span>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <Card>
          <Image src={mapImage} alt="map"/>
          <Image src={smileMemoji} alt="smiling memoji"/>   
      </Card>
    </div>
  </div>;
};
