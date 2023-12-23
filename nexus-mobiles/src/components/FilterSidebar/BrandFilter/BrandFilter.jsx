import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
import { useEffect, useState } from 'react';
import qs from 'query-string';
import { useSearchParams } from 'react-router-dom';

const BrandFIlter = () => {
	const [checked, setChecked] = useState([]);
	const [params, setParams] = useSearchParams();

	const axios = useAxios();
	const { data: brands } = useQuery({
		queryKey: ['brands'],
		queryFn: async () => {
			const response = await axios('/products/get-brand');
			return response.data;
		},
	});
	const handleChange = e => {
		if (e.target.checked) {
			setChecked([...checked, e.target.value]);
		} else {
			setChecked(checked.filter(brand => brand !== e.target.value));
		}
	};

	useEffect(() => {
		let currentQuery = {};
		if (params.size) {
			currentQuery = qs.parse(params.toString());
		}

		setParams({ ...currentQuery, brand: checked });
	}, [checked, params, setParams]);

	return (
		<div>
			<h5 className="text-xl ">Brand</h5>
			{/* h-36 overflow-y-auto */}
			<ul className="h-56 overflow-y-auto space-y-2 border [&>*:last-child]:border-none">
				{brands?.map((brand, idx) => (
					<li
						key={idx}
						className="flex gap-2 items-center py-1 px-1 border-b-2"
					>
						<input
							type="checkbox"
							value={brand}
							className="checkbox checkbox-xs"
							onChange={handleChange}
						/>
						{brand}
					</li>
				))}
			</ul>
		</div>
	);
};

export default BrandFIlter;
