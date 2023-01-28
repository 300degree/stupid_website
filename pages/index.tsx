import Title from '@/components/title'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.grid}>
      <Title />

      <h1>Character</h1>
      <div className={styles.characterZone}>
        <Link href={'character/hiragana'}>Hiragana</Link>
        <Link href={'character/katakana'}>Katakana</Link>
      </div>

      <h1>Category</h1>
      <div className={styles.categoryZone}>
        <Link href={''}>Lesson</Link>
      </div>

      <h1>Challenge</h1>
      <div className={styles.challengeZone}>
        <Link href={'challenge/quiz'}>Quiz</Link>
        <Link href={'challenge/flashcards'}>FlashCards</Link>
      </div>
    </div>
  )
}
