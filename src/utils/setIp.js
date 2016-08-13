const setIp = () => {
	$.getJSON("http://jsonip.com?callback=?", function (data) {
		localStorage.setItem('visitorIp', data.ip || '94.189.146.29');
	});
};
export default setIp;
