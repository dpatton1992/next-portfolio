'use client';

import styles from './schedule.module.css';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { BsClock, BsCaretLeft, BsCaretRight } from 'react-icons/bs';
import { useQuery } from 'react-query';

export function Schedule() {
	const today = new Date();
	const [month, setMonth] = useState(today.getMonth());
	const [year, setYear] = useState(today.getFullYear());
	const [date, setDate] = useState(null);
	const [duration, setDuration] = useState(15);

	// const schedule =

	useEffect(() => {
		const timeMin = new Date(year, month, 1).toISOString();
		const timeMax = new Date(year, month + 1).toISOString();
		console.log(timeMin, timeMax);

		fetch('/api/getSchedule/?' + new URLSearchParams({ timeMin, timeMax }), {
			// fetch('/api/getSchedule/', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				console.log(data);
			});
	});

	return (
		<div className={styles.container}>
			<div>
				<div>Daniel Patton</div>
				<h2>Schedule a Meeting</h2>
				<div className={styles.selectTime}>
					<BsClock />
					<select onChange={(e) => setDuration(Number(e.target.value))}>
						<option value={15} key="15">
							15 min
						</option>
						<option value={30} key="30">
							30 min
						</option>
						<option value={60} key="60">
							60 min
						</option>
					</select>
				</div>
			</div>
			<div className={styles.divider} />
			{date === null ? (
				<Calendar
					today={today}
					month={month}
					year={year}
					setDate={setDate}
					setMonth={setMonth}
				/>
			) : (
				<SelectTime date={date} duration={duration} setDate={setDate} />
			)}
		</div>
	);
}

function Calendar(props: {
	today: Date;
	month: number;
	year: number;
	// setDate:
	// 	| Dispatch<SetStateAction<null>>
	// 	| Dispatch<SetStateAction<Date>>;
	setDate: any;
	setMonth: Dispatch<SetStateAction<number>>;
}) {
	const { today, month, year, setDate, setMonth } = props;
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'November',
		'December',
	];
	const thisMonth = months[month];
	let firstDay = new Date(year, month).getDay();
	let lastDay = new Date(year, month + 1, 0).getDay();
	let daysInMonth = new Date(year, month + 1, 0).getDate();
	const daysArr = [];

	// add days to array
	while (daysInMonth > 0) {
		daysArr.unshift(daysInMonth);
		daysInMonth--;
	}

	// prepend empty divs to array to align days with correct day of week
	while (firstDay > 0) {
		daysArr.unshift(null);
		firstDay--;
	}

	return (
		<div className={styles.calendarContainer}>
			<h3 className={styles.month}>{thisMonth}</h3>
			<div className={styles.dayNames}>
				{days.map((day) => {
					return <div key={day}>{day}</div>;
				})}
			</div>
			<div className={styles.calendar}>
				{daysArr.map((day) => {
					return day ? (
						<div
							key={day}
							className={day > today.getDay() ? styles.available : styles.day}
							onClick={() => setDate(new Date(year, month, Number(day)))}
						>
							{day}
						</div>
					) : (
						<div key={(Math.random() + 1).toString(36).substring(7)} />
					);
				})}
			</div>
			<div className={styles.nav}>
				<button
					className={styles.navButton}
					onClick={() => setMonth(month - 1)}
				>
					<BsCaretLeft />
				</button>
				<button
					className={styles.navButton}
					onClick={() => setMonth(month + 1)}
				>
					<BsCaretRight />
				</button>
			</div>
		</div>
	);
}

function SelectTime(props: {
	date: Date;
	duration: number;
	setDate: Dispatch<SetStateAction<null>>;
}) {
	const { date, duration, setDate } = props;
	const start = new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate(),
		8
	);
	const end = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 17);
	const times: Array<Date> = [];
	let hour = 8;
	let minute = 0;

	while (hour < 17) {
		times.push(
			new Date(
				date.getFullYear(),
				date.getMonth(),
				date.getDate(),
				hour,
				minute
			)
		);

		if (minute < 60) {
			minute += duration;
		} else {
			minute = 0;
			hour++;
		}
	}

	return (
		<div className={styles.timeContainer}>
			<button onClick={() => setDate(null)}>
				<BsCaretLeft />
			</button>
			<div className={styles.timeGrid}>
				{times.map((time) => {
					return (
						<div className={styles.timeCard} key={time.toString()}>
							{time.toLocaleTimeString([], {
								hour: '2-digit',
								minute: '2-digit',
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
}
