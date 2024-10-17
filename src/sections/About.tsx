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
        <Image src={bookImage} alt="book cover"/>
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
                  component= {item.iconType}
                />
                <span> {item.title} </span>
              </div>
            ))
          }
        </div>
      </Card>
    </div>
  </div>;
};
