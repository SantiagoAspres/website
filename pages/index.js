import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Hero, HeroContent, Title} from "../styles/uielements";

export default function Home() {
  return (
      <div>
          <Hero>
              <HeroContent>
                  <Title>
                      Santiago Aspres
                  </Title>
              </HeroContent>
          </Hero>
      </div>
  )
}
