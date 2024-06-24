import { createDirectus, rest, staticToken } from "@directus/sdk";

type Global = {
    title: string;
    description: string;
}

type Author = {
    id: number;
    name: string;
}

type Page = {
    title: string;
    content: string;
    slug: string;
}

type Post = {
    image: string;
    title: string;
    status: string;
    author: Author;
    content: string;
    published_date: string;
    slug: string;
}

type Schema = {
    posts: Post[];
    global: Global;
    pages: Page[];
}

const directus =
    createDirectus<Schema>(import.meta.env.DIRECTUS_ADDRESS)
        .with(staticToken(import.meta.env.DIRECTUS_STATIC_TOKEN))
        .with(rest());

export default directus;