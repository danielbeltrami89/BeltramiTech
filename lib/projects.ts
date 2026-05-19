import { GITHUB_USERNAME } from "@/lib/constants";

export type Project = {
  id: number | string;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
};

export const mockProjects: Project[] = [
  {
    id: "mock-streaming",
    name: "streaming-mobile-kit",
    description:
      "A mobile-first streaming app foundation with playback, profiles and analytics hooks.",
    language: "Swift",
    stargazers_count: 24,
    html_url: "https://github.com/",
  },
  {
    id: "mock-carplay",
    name: "carplay-android-auto-demo",
    description:
      "Reference architecture for connected automotive media experiences.",
    language: "Kotlin",
    stargazers_count: 18,
    html_url: "https://github.com/",
  },
  {
    id: "mock-product",
    name: "digital-product-starter",
    description:
      "Scalable product starter with Firebase, REST APIs and clean mobile architecture.",
    language: "TypeScript",
    stargazers_count: 12,
    html_url: "https://github.com/",
  },
];

function sortProjects(projects: Project[]) {
  return [...projects].sort((a, b) => {
    const descriptionScore =
      Number(Boolean(b.description)) - Number(Boolean(a.description));

    if (descriptionScore !== 0) {
      return descriptionScore;
    }

    return b.stargazers_count - a.stargazers_count;
  });
}

export async function getGithubProjects(): Promise<{
  projects: Project[];
  isFallback: boolean;
}> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
      {
        next: { revalidate: 3600 },
        signal: controller.signal,
      },
    );

    if (!response.ok) {
      throw new Error("GitHub API request failed");
    }

    const repos = (await response.json()) as Project[];
    return {
      projects: sortProjects(repos).slice(0, 6),
      isFallback: false,
    };
  } catch {
    return {
      projects: sortProjects(mockProjects),
      isFallback: true,
    };
  } finally {
    clearTimeout(timeout);
  }
}
