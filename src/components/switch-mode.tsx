"use client";

import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react/dist/ssr";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { useTheme } from "next-themes";
import { type ComponentProps, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function SwitchMode({
	className,
	...props
}: ComponentProps<typeof SwitchPrimitive.Root>) {
	const { theme, setTheme } = useTheme();

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<SwitchPrimitive.Root
				className={cn(
					"group inline-flex h-[1.15rem] w-16 shrink-0 cursor-pointer items-center rounded-full border border-stroke bg-surface shadow-xs outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				disabled
				{...props}
			>
				<SwitchPrimitive.Thumb
					className={cn(
						"pointer-events-none flex size-8 cursor-pointer items-center justify-center rounded-full bg-white ring-0 transition-transform group-hover:ring-8 group-hover:ring-white/50 group-focus-visible::ring-white/50 group-focus-visible:ring-8 group-focus-visible:ring-stroke data-[state=checked]:translate-x-[calc(100%)] data-[state=unchecked]:translate-x-0 dark:group-hover:ring-stroke",
					)}
				/>
			</SwitchPrimitive.Root>
		);
	}

	const isDark = theme === "dark";

	return (
		<SwitchPrimitive.Root
			data-slot="switch"
			checked={!isDark}
			onCheckedChange={(checked) => setTheme(checked ? "light" : "dark")}
			className={cn(
				"group inline-flex h-[1.15rem] w-16 shrink-0 cursor-pointer items-center rounded-full border border-stroke bg-surface shadow-xs outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...props}
		>
			<SwitchPrimitive.Thumb
				data-slot="switch-thumb"
				className={cn(
					"pointer-events-none flex size-8 cursor-pointer items-center justify-center rounded-full bg-white ring-0 transition-transform group-hover:ring-8 group-hover:ring-white/50 group-focus-visible::ring-white/50 group-focus-visible:ring-8 group-focus-visible:ring-stroke data-[state=checked]:translate-x-[calc(100%)] data-[state=unchecked]:translate-x-0 dark:group-hover:ring-stroke",
				)}
			>
				{isDark ? (
					<SunIcon className="size-3 text-black" />
				) : (
					<MoonStarsIcon className="size-3 text-black" />
				)}
			</SwitchPrimitive.Thumb>
		</SwitchPrimitive.Root>
	);
}
