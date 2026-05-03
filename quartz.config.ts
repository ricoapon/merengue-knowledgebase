import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Merengue",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "merengue.ricoapon.nl",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fbfdff",
          lightgray: "#e6eef8",
          gray: "#b7c7e6",
          darkgray: "#3b4a6b",
          dark: "#1a2340",
          secondary: "#1d4ed8",      // vibrant blue
          tertiary: "#ef4444",       // bright red accent
          highlight: "rgba(29, 78, 216, 0.12)",
          textHighlight: "#ffe06688",
        },
        darkMode: {
          light: "#0f172a",
          lightgray: "#1e293b",
          gray: "#64748b",
          darkgray: "#dbeafe",
          dark: "#f1f5f9",
          secondary: "#3b82f6",      // lighter blue for dark mode
          tertiary: "#f87171",
          highlight: "rgba(59, 130, 246, 0.18)",
          textHighlight: "#ffe06688",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      // Dates are irrelevant for this site.
      // Plugin.CreatedModifiedDate({
      //   priority: ["frontmatter", "git", "filesystem"],
      // }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
