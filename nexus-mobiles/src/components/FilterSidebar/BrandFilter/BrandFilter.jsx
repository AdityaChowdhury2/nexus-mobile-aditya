import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
const BrandFIlter = () => {
	const axios = useAxios();
	const { data: brands } = useQuery({
		queryKey: ['brands'],
		queryFn: async () => {
			const response = await axios('/products/get-brand');
			return response.data;
		},
	});

	return (
		<div>
			<h5 className="text-xl ">Brand</h5>
			<ul className="h-36 overflow-y-auto space-y-2 border [&>*:last-child]:border-none">
				{brands?.map((brand, idx) => (
					<li
						key={idx}
						className="flex gap-2 items-center py-1 px-1 border-b-2"
					>
						<input
							type="checkbox"
							name={brand}
							className="checkbox checkbox-xs"
							onChange={e => {
								console.log(e.target.checked, e.target.name);
							}}
						/>
						{brand}
					</li>
				))}
			</ul>
		</div>
	);
};

export default BrandFIlter;
