'use client';

import { InlineWidget } from 'react-calendly';

export function Calendly() {
	return (
		<div className="calendar" style={{ width: '100%' }}>
			<InlineWidget
				// styles={{ width: '100%' }}
				url="https://calendly.com/d/z82-mwc-769/30min"
			/>
		</div>
	);
}
