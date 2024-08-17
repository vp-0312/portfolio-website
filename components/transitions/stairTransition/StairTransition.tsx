"use client";

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import TransitionEffect from "./TransitionEffect";

const StairTransition = () => {
	const pathName = usePathname();

	return (
		<AnimatePresence mode="wait">
			<div key={pathName}>
				<div className="h-screen w-screen fixed top-0 left-0 right-0 flex pointer-events-none z-40">
					<TransitionEffect />
				</div>

				<motion.div
					className="h-screen w-screen fixed top-0 pointer-events-none bg-primary"
					initial={{opacity: 1}}
					animate={{
						opacity: 0,
						transition: {
							delay: 1,
							duration: 0.4,
							ease: "easeInOut"
						}
					}}
				/>

			</div>
		</AnimatePresence>
	)
}

export default StairTransition
