import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';

const OSFilter = () => {
	const axios = useAxios();
	const { data: OS } = useQuery({
		queryKey: ['OS'],
		queryFn: async () => {
			const response = await axios('/products/get-os');
			return response.data;
		},
	});

	return (
		<div>
			<h5 className="text-xl ">
				OS <span className="text-red-900 font-bold text-sm">(Not Working)</span>
			</h5>
			<ul className="h-36 overflow-y-auto space-y-2 border [&>*:last-child]:border-none">
				{OS?.map((os, idx) => {
					return (
						<li
							key={idx}
							className="flex gap-2 items-center py-1 px-1 border-b-2"
						>
							<input
								type="checkbox"
								name={os}
								className="checkbox checkbox-xs"
								onChange={e => {
									console.log(e.target.checked, e.target.name);
								}}
							/>
							{os === 'N/A' ? 'Miscellaneous' : os}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default OSFilter;
