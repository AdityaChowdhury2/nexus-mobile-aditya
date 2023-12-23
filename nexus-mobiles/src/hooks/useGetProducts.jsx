import { useSearchParams } from 'react-router-dom';
import qs from 'query-string';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useGetProducts = () => {
	const [searchParams] = useSearchParams();
	const axios = useAxios();
	// console.log(searchParams);
	const query = qs.parse(searchParams.toString());
	// console.log(query);

	// console.log(qs.stringify(query));
	const { data: mobiles } = useQuery({
		queryKey: ['product', query],
		queryFn: async () => {
			const response = await axios(`/products?${qs.stringify(query)}`);
			return response.data;
		},
	});
	return { mobiles };
};

export default useGetProducts;
