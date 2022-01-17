let lastId = 0;

export const RandomID = (prefix = 'id') => {
	lastId++;
	return `${prefix}${lastId}`;
}

export const verifyToken = () => {
	return (localStorage.token !== undefined && localStorage.token !== 'undefined' && localStorage.token !== '') ||
		(sessionStorage.token !== undefined && sessionStorage.token !== 'undefined' && sessionStorage.token !== '')
}

export const dateToDatabase = (date: string|number|Date) => {
	return new Date(date)
		.toLocaleString('en-us', { year: 'numeric', month: '2-digit', day: '2-digit' })
		.replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
}

export const dateFormatted = (date: string|number|Date) => {
	return new Date(date).toLocaleDateString('pt-br')
}

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}