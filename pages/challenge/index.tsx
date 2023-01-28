import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter, NextRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Title from "@/components/title";

const ChallengePages = () => {
  return (
    <div className={styles.grid}>
      <Title />

      <h1>Challenge</h1>
      <div className={styles.challengeZone}>
        <Link href={'challenge/quiz'}>Quiz</Link>
        <Link href={'challenge/flashcards'}>FlashCards</Link>
      </div>
    </div>
  )
}

export default ChallengePages