interface BreadcrumbItem {
  label: string;
  href: string;
}

function formatLabel(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getGarageBreadcrumbs(params: {
  category?: string;
  location?: string;
  business?: string;
}): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Garages', href: '/garages' }
  ];

  if (params.category) {
    breadcrumbs.push({
      label: formatLabel(params.category),
      href: `/garages/${params.category}`
    });
  }

  if (params.location) {
    breadcrumbs.push({
      label: formatLabel(params.location),
      href: `/garages/${params.category}/${params.location}`
    });
  }

  if (params.business) {
    breadcrumbs.push({
      label: formatLabel(params.business),
      href: `/garages/${params.category}/${params.location}/${params.business}`
    });
  }

  return breadcrumbs;
}

export function getArticleBreadcrumbs(params: {
  category?: string;
  article?: string;
}): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Articles', href: '/articles' }
  ];

  if (params.category) {
    breadcrumbs.push({
      label: formatLabel(params.category),
      href: `/articles/${params.category}`
    });
  }

  if (params.article) {
    breadcrumbs.push({
      label: formatLabel(params.article),
      href: `/articles/${params.category}/${params.article}`
    });
  }

  return breadcrumbs;
}

export function getSearchBreadcrumbs(query?: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Search', href: '/search' }
  ];

  if (query) {
    breadcrumbs.push({
      label: `Results for "${query}"`,
      href: `/search?q=${encodeURIComponent(query)}`
    });
  }

  return breadcrumbs;
}