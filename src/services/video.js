import * as httpRequest from '~/untils/httpRequest';

export const video = async (type='for-you', page='5') => {
    try {
        const res = await httpRequest.get('videos', {
            params: {
                type,
                page,
            },
        });
        return res.data
    } catch (error) {
        console.log(error);
    }
};