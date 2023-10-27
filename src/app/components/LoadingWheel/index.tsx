import styles from './LoadingWheel.module.css';

// loading wheel animated with css
export function LoadingWheel(props: { height: string; width: string }) {
	return (
		<div
			className={styles.loading_wheel_container}
			style={{ height: props.height, width: props.width }}
		>
			<div className={styles.loading_wheel}></div>
		</div>
	);
}
