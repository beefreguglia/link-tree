import type { Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { BackgroundImage } from "@/components/background-image";
import { SwitchMode } from "@/components/switch-mode";
import { components } from "@/slices";

interface HomeTemplateProps {
	page: Content.LinktreeDocument;
}

export function HomeTemplate({ page }: HomeTemplateProps) {
	const profileSlice = page.data.slices.find(
		(slice) => slice.slice_type === "profile_section",
	);

	const otherSlices = page.data.slices.filter(
		(slice) => slice.slice_type !== "profile_section",
	);

	return (
		<BackgroundImage>
			<main className="flex min-h-screen min-w-lg flex-col items-center gap-4 pt-14 pb-8">
				{profileSlice && (
					<SliceZone slices={[profileSlice]} components={components} />
				)}

				<div className="-mt-6 mb-2">
					<SwitchMode />
				</div>

				<SliceZone slices={otherSlices} components={components} />

				<p className="py-6 text-center text-text">
					Feito com ♥ pela Rocketseat
				</p>
			</main>
		</BackgroundImage>
	);
}
