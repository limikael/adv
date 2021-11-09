export function lineNumberByCharIndex(s, index) {
	return s.substr(0,index).split("\n").length;
}