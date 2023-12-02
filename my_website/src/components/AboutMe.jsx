export default function AboutMe(props)
{
    return (
        <section className="container mx-auto max-w-3xl">
            <article className="px-3 py-2 border border-gray rounded-md">
                <h3 className="text-offWhite text-xsm">davidddeveloper / ABOUTME.md</h3>
                <div className="flex justify-start gap-4 mt-xsml">
                    <span className="text-lg">👋</span>
                    <h4 className="text-lg text-lightBlue">I'm David</h4>
                </div>
                <div className="line w-full border border-gray"></div>
                <div className="mt-xsml border-l-4 border-gray pl-2">
                    <p className="text-sm">Eversince I was a kid I got so fascinated
                        about computers💻. I would always
                        wondered how those tiny manchine can
                        perform complex and even breath taking
                        task. This curiosity lead me to pursue a
                        field in computer science, and start coding
                        in python at 16.</p>
                </div>
                <div className="mt-xsml">
                    <article className="flex items-center">
                        <span>🌱</span>
                        <p className="text-offWhite">I'm a Software Engineering student at
                            ALX
                        </p>
                    </article>
                    <article className="flex items-center">
                        <span>🤝</span>
                        <p className="text-offWhite">I'm looking to collaborate on something
                            that could change Africa first and then
                            the entire universe.
                        </p>
                    </article>
                    <article className="flex items-center">
                        <span>📫</span>
                        <p className="text-offWhite">You can find me on <a href="https://www.twitter.com/_david_conteh"
                                target="_blank">X
                                (twitter)</a></p>
                    </article>
                </div>
                <article className="mt-xsml">
                    <h3 className="text-md text-lightBlue">Fun fact🤣</h3>
                    <div className="mt-5">
                        <p className="border-l-4 border-gray pl-2">
                            My twin brother is way tall than me
                            whenever we're out in public people thinks
                            he is the eldest. That my friend is annoying
                        </p>
                    </div>
                </article>
            </article>
        </section>
    )
}