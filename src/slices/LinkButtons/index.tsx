import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import type { SliceComponentProps } from "@prismicio/react";
import type { FC } from "react";
import { Button } from "@/components/ui/button";

export type LinkButtonsProps = SliceComponentProps<Content.LinkButtonsSlice>;

const LinkButtons: FC<LinkButtonsProps> = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="flex w-full flex-col gap-4 px-4"
		>
			{slice.primary.linkbuttons.map((item, index) => (
				<Button key={`button-${index}`} asChild>
					<PrismicNextLink field={item.url} className="w-full">
						{item.button_text}
					</PrismicNextLink>
				</Button>
			))}
		</section>
	);
};

export default LinkButtons;
