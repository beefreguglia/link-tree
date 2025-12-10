import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { HomeTemplate } from "@/templates/home-template";

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient();
	const page = await client.getSingle("linktree").catch(() => null);

	if (!page) {
		return {
			title: "Linktree não encontrado",
		};
	}

	return {
		title: page.data.meta_title || "Meu Linktree",
		description: page.data.meta_description || "Meus links",
	};
}

export default async function Home() {
	const client = createClient();
	const page = await client.getSingle("linktree").catch(() => null);

	if (!page) {
		return notFound();
	}

	return <HomeTemplate page={page} />;
}
