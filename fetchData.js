
async function fetchDataFromApi(keyword) {
    try {
        const apiData = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!apiData.ok) {
            throw new Error(`HTTP error! Status: ${apiData.status}`);
        }

        const apiJson = await apiData.json();
        console.log("API Data:", apiData);
        console.log("API JSON:", apiJson);
        const filteredPosts = apiJson.filter(a => a.title.includes(keyword));
        console.log(filteredPosts);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

fetchDataFromApi("eveniet quod temporibus");
