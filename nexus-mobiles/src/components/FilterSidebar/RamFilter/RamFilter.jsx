/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
import { useSearchParams } from 'react-router-dom';
import qs from 'query-string';
import { useEffect, useState } from 'react';

const RamFilter = () => {
	const [params, setParams] = useSearchParams();
	const [checked, setChecked] = useState([]);

	const axios = useAxios();
	const { data: allRams } = useQuery({
		queryKey: ['rams'],
		queryFn: async () => {
			const response = await axios('/products/get-ram');
			return response.data;
		},
	});

	const handleChange = e => {
		const ramNumber = Number(e.target.value);

		if (e.target.checked) {
			setChecked([...checked, ramNumber]);
			console.log('checked', ramNumber);
		} else {
			setChecked(checked.filter(ram => ram !== ramNumber));
		}
	};
	useEffect(() => {
		let currentQuery = {};
		if (params.size) {
			currentQuery = qs.parse(params.toString());
		}
		if (currentQuery.ram) {
			const { _ram, ...restQuery } = currentQuery;
			setParams(
				qs.stringify({ ...restQuery, ram: checked }, { arrayFormat: 'comma' })
			);
		}
		setParams({ ...currentQuery, ram: checked });
	}, [checked, params, setParams]);

	// console.log(allRams);
	return (
		<div>
			<h5 className="text-xl ">Ram</h5>
			<ul className="space-y-2 border [&>*:last-child]:border-none">
				{allRams?.map((ram, index) => (
					<li
						key={index}
						className="flex gap-2 items-center py-1 px-1 border-b-2"
					>
						<input
							type="checkbox"
							value={ram}
							className="checkbox checkbox-xs"
							onChange={handleChange}
						/>
						{ram} GB
					</li>
				))}
			</ul>
		</div>
	);
};

export default RamFilter;
