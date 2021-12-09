module.exports = function(config){

    config.setBrowserSyncConfig({
        https: {
            key: '/etc/cert/CA/localhost/localhost.decrypted.key',
            cert: '/etc/cert/CA/localhost/localhost.crt'
        }
    });

    config.addPassthroughCopy("src/js");
    config.addPassthroughCopy("src/css");
    return{
        dir: {
            input: "src",
            output: "dist",
            data: "_data"
        }
    };
};