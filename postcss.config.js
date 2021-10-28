module.exports = (context) => ({
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        cssnano: context.env === 'production' ? {} : false,
    }
})