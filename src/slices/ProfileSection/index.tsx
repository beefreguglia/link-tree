import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import type { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type ProfileSectionProps =
	SliceComponentProps<Content.ProfileSectionSlice>;

const ProfileSection: FC<ProfileSectionProps> = ({ slice }) => {
	const getInitials = (name: string | null) => {
		if (!name) return "U";
		return name.slice(0, 2).toUpperCase();
	};

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="flex flex-col items-center justify-center p-6"
		>
			<Avatar>
				<AvatarImage
					src={slice.primary.avatar_image.url || undefined}
					alt={slice.primary.avatar_image.alt || "Avatar do usuário"}
				/>
				<AvatarFallback>{getInitials(slice.primary.username)}</AvatarFallback>
			</Avatar>

			<p className="mt-2 text-text">@{slice.primary.username}</p>
		</section>
	);
};

export default ProfileSection;
