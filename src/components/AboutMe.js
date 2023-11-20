import { ActiveDot } from "@/assets/svgs/ActiveDot"
import { ImageShadow } from "./ImageShadow"
import { Title } from "./Title"
import { JsIcon } from "@/assets/svgs/JsIcon"

export const AboutMe = () => {
    return (
        <div>
            <Title title={'About me'}></Title>
            <div className={'grid grid-cols-[1fr] gap-[80px] md:grid-cols-[1fr_1fr]  '}>
                <div className="flex justify-center md:justify-start">
                    <div className='w-[400px] h-[480px]'>
                        <ImageShadow src={'/AboutMePic.png'} alignPic={'md:left-[40px]'} />
                    </div>
                </div>


                <div className="flex flex-col gap-[24px]">
                    <div className="text-[30px]">Curious about me? Here you have it:</div>
                    <div className="flex flex-col gap-[16px]">
                        <p>I'm a passionate, <span className="underline">self-proclaimed designer</span> who specializes in full stack development (React.js & Node.js). I
                            am very enthusiastic about bringing the technical and visual aspects of digital products to life. User
                            experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                        </p>

                        <p>
                            I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a
                            developer, taking on new challenges and learning the latest technologies along the way. Now, in my early
                            thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications
                            using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                        </p>

                        <p>
                            I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to
                            development.
                        </p>

                        <p>
                            When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker,
                            witnessing the journey of early startups or enjoying some free time. You can follow me on <span className="underline">Twitter</span> where I
                            share tech-related bites and build in public, or you can follow me on <span className="underline">GitHub</span>.
                        </p>

                        <p>
                            Finally, some quick bits about me.
                        </p>
                        <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-[10px]">
                            <div className="flex justify-start gap-[10px] items-center">
                                <div className='flex justify-center items-center'>
                                    <ActiveDot color={'black'} />
                                </div>
                                <div>
                                    B.E. in Computer Engineering
                                </div>
                            </div>
                            <div className="flex justify-start gap-[10px] items-center">
                                <div className='flex justify-center items-center'>
                                    <ActiveDot color={'black'} />
                                </div>
                                <div>
                                    Avid learner
                                </div>
                            </div>
                            <div className="flex justify-start gap-[10px] items-center">
                                <div className='flex justify-center items-center'>
                                    <ActiveDot color={'black'} />
                                </div>
                                <div>
                                    Full time freelancer
                                </div>
                            </div>
                            <div className="flex justify-start gap-[10px] items-center">
                                <div className='flex justify-center items-center'>
                                    <ActiveDot color={'black'} />
                                </div>
                                <div>
                                    Aspiring indie hacker
                                </div>
                            </div>
                        </div>
                        <p>
                            One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't
                            bite 😉
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}