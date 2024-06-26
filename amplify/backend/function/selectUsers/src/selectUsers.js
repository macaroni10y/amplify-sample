import {get} from 'aws-amplify/api';

export const getUsers = async roomId => {
    try {
        const restOperation = get({
            apiName: 'api4bbeba31',
            path: '/users',
            options: {
                queryParams: {
                    roomId: roomId,
                },
            },
        });
        const { body } = await restOperation.response;
        return await body.json();
    } catch (e) {
        console.log('GET call failed: ', JSON.parse(e.response.body));
    }
};
