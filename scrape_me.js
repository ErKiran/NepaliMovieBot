const { PythonShell } = require('python-shell');

PythonShell.run('scrapper.py', null, function (err, results) {
    if (err) throw err;
    console.log('results: %j', JSON.parse(results));
    console.log('finished');
})