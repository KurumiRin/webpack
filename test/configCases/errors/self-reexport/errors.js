module.exports = [
	[/Circular reexports "\.\/c2.js"\.something --> "\.\/c1.js"\.something -\(circular\)-> "\.\/c2.js"\.something/],
	[/Circular reexports "\.\/a.js"\.something -\(circular\)-> "\.\/a.js"\.something/],
	[/Circular reexports "\.\/b.js"\.other --> "\.\/b.js"\.something -\(circular\)-> "\.\/b.js"\.other/],
];
