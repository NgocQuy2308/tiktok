import * as httpRequest from '~/untils/httpRequest';
 
export const user = async (page='3', per_page='5') => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page,
            },
        });
        return res.data
    } catch (error) {
        console.log(error);
    }
};
