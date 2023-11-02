'use client';

import { Octokit, App } from 'octokit';
import { useRef, useEffect, useState } from 'react';

const octokit = new Octokit({
	userAgent: 'DP-Portfolio',
});

export default function GithubActivity() {
	return (
		<>
			<ContributionGraph />
			<ActivityOverview />
		</>
	);
}

function RecentCommmits() {
	// const { users } = octokit.rest;
	return <div></div>;
}

function ContributionGraph() {
	return <div></div>;
}

function ActivityOverview() {
	return <div></div>;
}
