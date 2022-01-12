import { Head } from '/imports.js';
import Hero from '../components/Hero/Hero.js';
import Card from '../components/Card/Card.js';

export default function Home() {
  return (
    <section>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Card />
    </section>
  )
}