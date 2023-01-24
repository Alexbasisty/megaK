module.exports = {
    apps: [
        {
            name: 'apka',
            script: 'dist/index.js',
            autorestart: true,
            max_memory_restart: '2G',
        }
    ],
};