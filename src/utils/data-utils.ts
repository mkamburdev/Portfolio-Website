import type { CollectionEntry } from 'astro:content';

// Sort projects by date DESC (newest first)
export function sortItemsByDateDesc(itemA: CollectionEntry<'projects'>, itemB: CollectionEntry<'projects'>) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

// Create URL-friendly slug from text
export function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}
