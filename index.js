const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'a0eb5841',
            s: searchTerm
        }
    });
    console.log(response);
    console.log(response.data);
    return response;
};

const input = document.querySelector('input');


const onInput = (event) => {
    fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 1000));



// let dataa;
// fetchData().then((d) => {dataa = d});
