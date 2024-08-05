import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Capscyber",
        template: `%s | Caps`
    },
    description: "Caps is an Professional B2B Service at Indonesia",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    metadataBase: new URL("https://capscyber.com"),
};
