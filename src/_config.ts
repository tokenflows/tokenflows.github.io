import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import date from "lume/plugins/date.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import pageFind from "lume/plugins/pagefind.ts";
import sitemap from "lume/plugins/sitemap.ts";
import feed from "lume/plugins/feed.ts";
import picture from "./_plugins/picture.ts";
import imagick from "lume/plugins/imagick.ts";
import copyright from "./_plugins/copyright.ts";

const site = lume({location: new URL("https://yumi.ai/")});

site
  .ignore("README.md", "LICENSE", "CHANGELOG.md", ".gitkeep")
  .use(sass({
    style: "compressed"
  }))
  .use(jsx())
  .use(date())
  .use(codeHighlight())
  .use(basePath())
  .use(sitemap())
  .use(slugifyUrls({ alphanumeric: false }))
  .use(resolveUrls())
  .use(picture())
  .use(imagick({extensions: [".webp",".jpg", ".jpeg", ".png"]}))
  .use(copyright({ message: "2023 © This code belongs to yūmi labs litd."}))
  .use(pageFind({
    ui: {
      resetStyles: false,
      containerId: "search",
    },
    indexing: {
      rootSelector: "html",
      glob: "**/*.html",
      verbose: false,
    },
  }))
  .use(feed({
    output: ["/feed.json", "/feed.xml"],
    query: "type=posts",
    info: {
      title: "=site.title",
      description: "=site.description",
    },
    items: {
      title: "=title",
      content: "$.post-body",
    }
  }))
  .copy("assets/js/")  // TODO: copyRemainingFiles() should take care of this.
  .copyRemainingFiles();
  
export default site;
