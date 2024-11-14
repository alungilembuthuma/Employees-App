module.exports = {
   
    plugins: [
      new webpack.DefinePlugin({
        'process.env.MY_API_KEY': JSON.stringify('your_actual_api_key'),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') // Use process.env.NODE_ENV from your build environment
      })
    ]
  };