const newman = require ('newman');

newman.run({
	collection: require ('./collection/collection.json'),
	//environment:require ('./collection/env.json'),
	reporters: 'htmlextra',
	iterationCount: 1,
	reporter: {
		htmlextra: {
    			export: './Reports/report.html',//if not specified ,
		}
	}
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');

});