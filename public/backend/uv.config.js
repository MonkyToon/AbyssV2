/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/backend/uv.handler.js',
    client: '/backend/uv.client.js',
    bundle: '/backend/uv.bundle.js',
    config: '/backend/uv.config.js',
    sw: '/backend/uv.sw.js',
};
