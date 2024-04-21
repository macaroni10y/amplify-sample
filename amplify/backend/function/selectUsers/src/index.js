/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    if (!event.queryStringParameters.roomId) {
        throw new Error('roomId is not defined');
    }
    const response = await fetch(
        `https://3b0tcfg10l.execute-api.ap-northeast-1.amazonaws.com/prod/users?roomId=${event.queryStringParameters.roomId}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        });
    const data = await response.json();
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
        },
        body: JSON.stringify(data),
    };
};
