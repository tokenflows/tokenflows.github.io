// plugins/copyright.ts
interface Options {
  message: string;
}
  
export default function (options: Options) {
  function addBanner(content: string): string {
    const banner = `/* ${options.message} */`;
    return banner + "\n" + content;
  }
  
  return (site: Site) => {
    site.process([".css"], (page) => {
      page.content = addBanner(page.content as string);
    });
  };
}