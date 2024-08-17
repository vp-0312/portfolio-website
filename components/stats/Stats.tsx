"use client";

import CountUp from "react-countup";

type StatData = {
	num: number,
	text: string
}

const stats = [
	{
		num: 2,
		text: "Years of experience"
	},
	{
		num: 26,
		text: "Projects completed"
	},
	{
		num: 8,
		text: "Technologies mastered"
	},
	{
		num: 500,
		text: "Code commits"
	}
]

const Stats = () => {
	return (
		<section className="pt-8 pb-12 xl:pt-0 xl:pb-0">
			<div className="container mx-auto">
				<div className="flex flex-wrap max-w-[80vw] xl:max-w-none gap-6 mx-auto mb-6">
					{stats.map((item, index) => {
						return <div
							className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
							key={index}>
							<CountUp
								end={item.num}
								duration={5}
								delay={2}
								className="text-4xl xl:text-6xl font-extrabold self-start"
							/>
							<p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
								{item.text}
							</p>
						</div>
					})}
				</div>
			</div>
		</section>
	)
}

export default Stats
