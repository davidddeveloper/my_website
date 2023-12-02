import AboutMe from './AboutMe'
import Hero from './Hero'

export default function Main(props)
{
    return (
        <main className="container mx-auto  px-5">
            <Hero />
            <AboutMe />
        </main>
    )
}