

export const executeGetRequest = async (url) => {
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (res.status != 200) {
            return {
                code: res.status,
                error: res.text(),
            };
        }
        const response = await res.json();
        console.log(response)
        return {
            code: res.status,
            response: response,
        };
    } catch (err) {
        return {
            code: 400,
            error: err + '',
        };
    }
};