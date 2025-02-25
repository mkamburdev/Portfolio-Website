export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    description: string;
    image?: Image;
    actions?: Link[];
};

/**
 * Main site configuration type
 * Defines all configurable aspects of the site including:
 * - Basic info (title, description)
 * - Navigation links
 * - Social media links
 * - Hero section content
 * - Project display settings
 */
export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Muhammed Kambur',
    description: "I'm Muhammed Kambur, as a motivated web developer, I am passionate about leveraging my skills and experience to add value to any organization.",
    image: {
        src: '/img/thumbnail.avif',
        alt: 'Muhammed Kambur Portfolio'
    },
    headerNavLinks: [
        {
            text: 'Index',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'Email',
            href: 'mailto:info@mkambur.com'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/mkamburdev'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/mkambur'
        }
    ],
    hero: {
        description: "I'm Muhammed Kambur, as a motivated web developer, I am passionate about leveraging my skills and experience to add value to any organization. I am currently seeking new opportunities to contribute and grow."
    },
    projectsPerPage: 5,
};

export default siteConfig;
