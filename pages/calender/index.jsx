// @ts-nocheck
import { useState } from "react";
import Image from 'next/image';
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'


const Calender = () => {
  // const [events, setEvents] = useState([
  //   { title: 'event 1', date: '2021-11-15' },
  //   { title: 'event 2', date: '2021-11-22' }
  // ]);
	const [cards, setCards] = useState([
		{ name: "yuta", url: "http://hogehoge.com", sub: "雄太です。よろしくお願いします" }
	]);

	return (
		<div>
			{
				cards.map( card => {
					return (
						<div>
							<img src={card.url} alt="" />
							<div>
								<p>{ card.name }</p>
							</div>
							<div>
								<p>{ card.sub }</p>
							</div>
						</div>
					);
				})
			}
		</div>
	);
}

export default Calender;
