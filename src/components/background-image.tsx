"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { type ReactNode, useEffect, useState } from "react";
import bgDesktop from "../../public/bg-desktop.png";
import bgDesktopLight from "../../public/bg-desktop-light.png";
import bgMobile from "../../public/bg-mobile.png";
import bgMobileLight from "../../public/bg-mobile-light.png";

type BackgroundImageProps = {
	children: ReactNode;
};

export function BackgroundImage({ children }: BackgroundImageProps) {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<div className="relative h-screen w-full overflow-hidden">
				<div className="relative z-10 mx-auto flex h-full max-w-lg flex-col items-center py-14 text-white">
					{children}
				</div>
			</div>
		);
	}

	return (
		<div className="relative h-screen w-full overflow-hidden">
			<div className="md:hidden">
				<Image
					src={theme === "dark" ? bgMobile : bgMobileLight}
					alt="Background Mobile"
					fill
					priority
					quality={100}
					className="object-cover"
				/>
			</div>

			<div className="hidden md:block">
				<Image
					src={theme === "dark" ? bgDesktop : bgDesktopLight}
					alt="Background Desktop"
					fill
					priority
					quality={100}
					className="object-cover"
				/>
			</div>

			<div className="relative z-10 mx-auto flex h-screen max-w-lg flex-col items-center py-14 text-white">
				{children}
			</div>
		</div>
	);
}
