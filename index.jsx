//import Link from 'next/link';//
//import Illustration from '../components/Illustration';//
//import styles from '../styles/HomePage.module.css';//

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>THIRD YEAR</h1>
          <h1>IT  STUDENT</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Nica G. Santos</h1>
            <h6 className={styles.bio}>Information Technology Student</h6>
            <Link href="/resume">
              <button className={styles.button}>View Resume</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
