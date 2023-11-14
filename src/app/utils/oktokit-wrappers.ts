import { Octokit } from "@octokit/core";

// Replace with your GitHub token or use an authenticated Octokit instance
const octokit = new Octokit({ auth: process.env.GITHUB_PAT });

export interface Commit {
    sha: string;
    message: string;
    url: string;
    repo: string;
}

export async function getRecentCommitsForUser(username: string): Promise<Commit[]> {
    try {
        // Get the list of public repositories for the user
        const repoResponse = await octokit.request('GET /users/{owner}/repos', {
            owner: username,
        });

        // Fetch the 10 most recent commits for each repository
        const commitsPromises = repoResponse.data.map(async (repo: any) => {
            const commitResponse = await octokit.request('GET /repos/{owner}/{repo}/commits', {
                owner: username,
                repo: repo.name,
                per_page: 25,
            });

            return commitResponse.data.map((commit: any) => ({
                sha: commit.sha,
                message: commit.commit.message,
                url: commit.html_url,
                repo: repo.name,
            }));
        });

        // Wait for all commit promises to resolve
        const commitsArrays = await Promise.all(commitsPromises);

        // Flatten the array of arrays into a single array of commits
        const commits = commitsArrays.flat();

        // Sort commits by date in descending order
        commits.sort((a, b) => new Date(b.sha.slice(0, 25)).getTime() - new Date(a.sha.slice(0, 25)).getTime());

        // Return the 10 most recent commits
        return commits.slice(0, 25);
    } catch (error) {
        throw new Error(`Error fetching commits: ${(error as Error).message}`);
    }
}

export interface Repository {
    name: string;
    url: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    license: string;
    updated: string;
}

export async function getRepositoriesForUser(username: string): Promise<Repository[]> {
    try {
        // Get the list of public repositories for the user
        const repoResponse = await octokit.request('GET /users/{owner}/repos', {
            owner: username,
        });

        // Map the response to the data we want
        const repositories = repoResponse.data.map((repo: any) => ({
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks,
            license: repo.license?.name,
            updated: repo.updated_at,
        }));

        // Sort repositories by most recently updated
        repositories.sort((a: Repository, b: Repository) => new Date(b.updated).getTime() - new Date(a.updated).getTime());

        // Return the 10 most recently updated repositories
        return repositories.slice(0, 10);
    } catch (error) {
        throw new Error(`Error fetching repositories: ${(error as Error).message}`);
    }
}

export interface User {
    name: string | null;
    username: string;
    avatar: string;
    url: string;
    bio: string | null;
    location: string | null;
    email: string;
    twitter: string;
    repos: number;
    followers: number;
    following: number;
}

export async function getLanguagesForUser(username: string): Promise<string[]> {
    try {
        // Get the list of public repositories for the user
        const repoResponse = await octokit.request('GET /users/{owner}/repos', {
            owner: username,
        });

        // Map the response to the data we want
        const languages = repoResponse.data.map((repo: any) => repo.language);

        // Filter out duplicate languages
        const uniqueLanguages = languages.filter((language: string, index: number) => languages.indexOf(language) === index);

        // Remove null values
        const filteredLanguages = uniqueLanguages.filter((language: string) => language !== null);

        return filteredLanguages;
    } catch (error) {
        throw new Error(`Error fetching languages: ${(error as Error).message}`);
    }
}

type Payload = {
    action?: string,
    push_id?: number,
    size?: number,
    distinct_size?: number,
    ref?: string | null,
    ref_type?: string | null,
    master_branch?: string,
    description?: string,
    pusher_type?: string,
    head?: string,
    before?: string,
    commits?: Commit[];
}

export interface Contribution {
    date: string;
    type: string;
    payload: Payload;
}

export async function getContributionsForUser(username: string): Promise<Contribution[]> {
    try {
        // Get the user's public contributions
        const contributionResponse = await octokit.request('GET /users/{username}/events/public', {
            username, per_page: 100,
        });
        console.log(contributionResponse);
        // Map the response to the data we want
        const contributions: Contribution[] = contributionResponse.data.map((contribution: any) => ({
            date: contribution.created_at,
            type: contribution.type,
            payload: contribution.payload,
        }));

        // Sort contributions by date in ascending order
        contributions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        return contributions;
    } catch (error) {
        throw new Error(`Error fetching contributions: ${(error as Error).message}`);
    }
}