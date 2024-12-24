# Local Business Directory Website

An advanced Next.js-powered platform that creates an SEO-optimized directory for local businesses, with a current focus on auto repair shops and garages. The platform automatically generates and manages business listings by aggregating data from Google Places API and business websites, creating unique, optimized content for each listing.

## Core Features

- **Automated Content Generation**
  - Intelligent data aggregation from Google Places API
  - Automated website content processing
  - LLM-enhanced content creation
  - SEO-optimized listing pages

- **Hierarchical Directory Structure**
  - Location-based categorization
  - Service-based categorization
  - Business profile pages
  - SEO-optimized URL paths

- **Technical Implementation**
  - Static site generation for performance
  - Automated meta-tag optimization
  - Schema.org implementation
  - Structured data integration

## Tech Stack

```plaintext
Frontend:
- Next.js 15
- TypeScript
- TailwindCSS
- React

Content Processing:
- Markdown
- DOMPurify
- LLM Integration

Development:
- ESLint
- TypeScript
- Zod
```

## Project Structure

```plaintext
src/
├── app/                 # Next.js app router
│   ├── (routes)/       # Route groups
│   │   ├── garages/    # Business listings
│   │   └── search/     # Search functionality
│   └── page.tsx        # Homepage
├── components/         # React components
├── data/              # Data processing
├── lib/               # Utilities
└── types/             # TypeScript types
```

## Setup

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build
npm run start
```

## URL Structure

```plaintext
/
├── /garages                    # Main directory
│   ├── /[category]            # Category pages
│   │   └── /[business-name]   # Business profiles
└── /[location]                # Location pages
```

## Data Pipeline

```plaintext
1. Data Collection
   Google Places API → Website Scraping → Data Aggregation

2. Content Processing
   Raw Data → LLM Processing → SEO Optimization

3. Page Generation
   Content → Static Pages → Meta Generation
```

## Environment Variables

```plaintext
NEXT_PUBLIC_SITE_URL=
GOOGLE_PLACES_API_KEY=
NEXT_PUBLIC_GA_ID=
```

## Legal Documentation

Standard documentation included:
- Privacy Policy
- Terms of Service
- Cookie Policy