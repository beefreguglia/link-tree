import { asLink, type Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import type { FC } from "react";
import { SocialLink } from "@/components/social-link";

export type SocialLinksProps = SliceComponentProps<Content.SocialLinksSlice>;

const SocialLinks: FC<SocialLinksProps> = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="flex flex-wrap items-center justify-center gap-4 py-4 md:py-6"
		>
			{slice.primary.social_link.map((item, index) => {
				const href = asLink(item.social_url);
				const platformKey = item.platform?.toLowerCase().trim();

				if (!href || !platformKey) {
					return null;
				}

				return (
					<SocialLink key={index} href={href} iconName={platformKey as any} />
				);
			})}
		</section>
	);
};

export default SocialLinks;
