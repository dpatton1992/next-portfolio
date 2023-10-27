'use client';

import { Octokit, App } from 'octokit';
import { useRef, useEffect, useState } from 'react';

const octokit = new Octokit({
	userAgent: 'DP-Portfolio',
});

export default function GitHubVisulizer() {
	return (
		<>
			<ContributionGraph />
			<ActivityOverview />
		</>
	);
}

function ContributionGraph() {
	return <div></div>;
}

function ActivityOverview() {
	return <div></div>;
}
