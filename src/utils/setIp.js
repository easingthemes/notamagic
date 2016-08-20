const setIp = () => {
	$.getJSON('https://jsonip.com?callback=?', (data) => {
		localStorage.setItem('visitorIp', data.ip || '94.189.146.29');
	});
};
export default setIp;
