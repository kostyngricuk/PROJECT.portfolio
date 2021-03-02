export function FirstMiddleWare(req, res, next) {
    console.log('First middleware is done')
    next()
}