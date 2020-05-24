import React, { PureComponent, useEffect, useState } from 'react';
import {
	BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
	{
		name: 'Page A', pv: 2400
	},
	{
		name: 'Page B', pv: 1398
	},
	{
		name: 'Page C', pv: 9800
	},
	{
		name: 'Page D', pv: 3908
	},
	{
		name: 'Page E', pv: 4800
	},
	{
		name: 'Page F', pv: 3800
	},
	{
		name: 'Page G', pv: 4300
	},
];

const BarChartsComponent = (props) => {
	const { response } = props;
	const { higher_frequencies } = response;
	const { words, frequency } = higher_frequencies

	let [datas, setDatas] = useState([]);

	console.log("OK, renderizei component", datas);

	useEffect(() => {
		const charts = [];
		const countFrequency = frequency.length;
		for (let index = 0; index < countFrequency; index++) {
			charts.push(
				{
					name: words[index],
					frequency: frequency[index]
				}
			);
		}
		setDatas(charts);
	}, []);

	return (
		<div className="row">
			<div className="col-12 charts mt-5">
			<h5 className="text-left title-charts">Gráfico com a frequência de cada palavra</h5>
				<BarChart
					width={1460}
					height={400}
					data={datas}
					margin={{
						top: 5, right: 30, left: 20, bottom: 100
					}}

					barSize={20}>
					<XAxis dataKey="name" scale="point" padding={{ left: 5 }} />
					<YAxis />
					<Tooltip />
					<Legend padding={{ top: 40 }} />
					<CartesianGrid strokeDasharray="3 3" />
					<Bar dataKey="frequency" fill="#412fb3" background={{ fill: '#eee' }} className="charts-legend-item" />
				</BarChart>

			</div>
		</div>
	);
}

export default BarChartsComponent;