import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    const sitemapData: MetadataRoute.Sitemap = [
        {
            url: `https://www.qurban.kg/`,
            lastModified: new Date()
        },
        {
            url: `https://www.qurban.kg/ask-and-question/`,
            lastModified: new Date()
        },
        {
            url: `https://www.qurban.kg/form/`,
            lastModified: new Date()
        },
    ];
    
    return sitemapData;
}