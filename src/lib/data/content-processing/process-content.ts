import type { PlacesBusiness, EnhancedBusiness } from '@/types/enhanced-business';
import { promises as fs } from 'fs';
import path from 'path';

interface RawContent {
  places: PlacesBusiness;
  html: string;
}

interface ProcessedContent {
  markdown: {
    about: string;
    location: string;
    offerings: string;
    experience: string;
  };
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

const CONTENT_DIR = path.join(process.cwd(), 'data', 'businesses');

export async function processBusinessContent(
  placeId: string,
  raw: RawContent
): Promise<ProcessedContent> {
  const businessDir = path.join(CONTENT_DIR, placeId);
  
  // Ensure directories exist
  await fs.mkdir(path.join(businessDir, 'content'), { recursive: true });
  await fs.mkdir(path.join(businessDir, 'raw'), { recursive: true });
  
  // Save raw data
  await fs.writeFile(
    path.join(businessDir, 'raw', 'places.json'),
    JSON.stringify(raw.places, null, 2)
  );
  await fs.writeFile(
    path.join(businessDir, 'raw', 'html.html'),
    raw.html
  );

  // Generate markdown content
  const markdown = {
    about: generateAboutContent(raw),
    location: generateLocationContent(raw),
    offerings: generateOfferingsContent(raw),
    experience: generateExperienceContent(raw)
  };

  // Save markdown files
  await Promise.all(
    Object.entries(markdown).map(([key, content]) =>
      fs.writeFile(
        path.join(businessDir, 'content', `${key}.md`),
        content
      )
    )
  );

  // Generate metadata
  const metadata = {
    title: generateSEOTitle(raw),
    description: generateSEODescription(raw),
    keywords: generateSEOKeywords(raw)
  };

  return {
    markdown,
    metadata
  };
}

function generateAboutContent(raw: RawContent): string {
  return `# ${raw.places.name}\n\n...`;
}

function generateLocationContent(raw: RawContent): string {
  return `# Location & Accessibility\n\n...`;
}

function generateOfferingsContent(raw: RawContent): string {
  return `# Our Offerings\n\n...`;
}

function generateExperienceContent(raw: RawContent): string {
  return `# Customer Experience\n\n...`;
}

function generateSEOTitle(raw: RawContent): string {
  return `${raw.places.name} - Local Business Directory`;
}

function generateSEODescription(raw: RawContent): string {
  return `Visit ${raw.places.name} in ${raw.places.formatted_address}. Find business hours, contact information, and more.`;
}

function generateSEOKeywords(raw: RawContent): string[] {
  return [
    raw.places.name,
    ...raw.places.types || [],
    raw.places.formatted_address.split(',')[1].trim() // City
  ];
}