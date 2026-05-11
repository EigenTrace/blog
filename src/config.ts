export const SITE = {
  website: "https://eigentrace.github.io/blog/",   // trailing slash matters here
  author: "Linfeng Lyu",
  profile: "https://eigentrace.github.io/blog/",
  desc: "Notes on information retrieval, machine learning, and graduate school at UMass Amherst.",
  title: "Linfeng Lyu",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,        // turn on if you want "edit on GitHub" links per post
    text: "Edit page",
    url: "https://github.com/EigenTrace/blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "America/New_York",
} as const;
