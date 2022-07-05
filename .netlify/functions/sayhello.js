exports.handler = function (event, context, callback) {
    const { name = 'World' } = event.queryStringParameters;

    const message = `Hello to the ${name}!`
    callback(null, {
        statusCode: 200,
        body: `${message}`
    });
}