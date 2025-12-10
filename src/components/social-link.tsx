"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import {
	IoLogoFacebook,
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoLinkedin,
	IoLogoTiktok,
	IoLogoTwitch,
	IoLogoTwitter,
	IoLogoWhatsapp,
	IoLogoYoutube,
} from "react-icons/io5";

const socialIcons = {
	twitter: IoLogoTwitter,
	twitch: IoLogoTwitch,
	github: IoLogoGithub,
	facebook: IoLogoFacebook,
	instagram: IoLogoInstagram,
	youtube: IoLogoYoutube,
	linkedin: IoLogoLinkedin,
	whatsapp: IoLogoWhatsapp,
	tiktok: IoLogoTiktok,
};

type SocialIconName = keyof typeof socialIcons;

interface SocialLinkProps extends ComponentProps<typeof Link> {
	iconName: SocialIconName;
}

export function SocialLink({
	href,
	iconName,
	className,
	...props
}: SocialLinkProps) {
	const IconComponent = socialIcons[iconName];

	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`flex items-center justify-center rounded-full p-5 transition-colors duration-200 hover:bg-highlight ${className}
      `}
			{...props}
		>
			<IconComponent className="size-6 text-text" />
		</Link>
	);
}
