const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

const links = [
  { url: '/', changefreq: 'daily', priority: 0.8 },
  { url: '#/sponsorship', changefreq: 'monthly', priority: 0.7 },
  { url: '#/about/what-we-do', changefreq: 'monthly', priority: 0.7 },
  { url: '#/about/our-team', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/past-projects/coast-cards', changefreq: 'monthly', priority: 0.7 },
  { url: '#/competitions', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/past-projects/count-on-me', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/past-projects/changemaker-challenge', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/past-projects/bright-ideas', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/current-projects/second-savour', changefreq: 'monthly', priority: 0.7 },
  { url: '#/career', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/past-projects/banner-bags', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/past-projects/media-minds', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/past-projects/refresh', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/past-projects/kindred-knots', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/current-projects/himalayan-skyes', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/current-projects/unify', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/current-projects/catalyst', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/current-projects/turbio-energy', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/current-projects/aqua-analyzer', changefreq: 'monthly', priority: 0.7 },
  { url: '#/events', changefreq: 'monthly', priority: 0.7 },
  { url: '#/events/pm-series', changefreq: 'monthly', priority: 0.7 },
  { url: '#/events/forward-vision', changefreq: 'monthly', priority: 0.7 },
  { url: '#/projects/current-projects/the-beekind-company', changefreq: 'monthly', priority: 0.7 },
];

// Create a write stream to generate the sitemap
const sitemapStream = new SitemapStream({ hostname: 'https://enactussfu.ca' });
const writeStream = createWriteStream(path.resolve(__dirname, './public/sitemap.xml'));

// Pipe the sitemap into the write stream
sitemapStream.pipe(writeStream);

// Write all links to the sitemap
links.forEach((link) => sitemapStream.write(link));

// Close the stream
sitemapStream.end();

writeStream.on('finish', () => {
  console.log('Sitemap generated successfully!');
});
