const url = 'http://localhost:3000';

function get(url, data) {
    url = new URL(url);
    data = Object.assign({}, data);
    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
    return fetch(url, {
        method: "GET",
    }).then(response => response.json())
}

function del(url) {
    return fetch(url, {
        method: "DELETE",
    }).then(response => response.json())
}

function patch(url, data) {
    return fetch(url, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
}

function post(url, data) {
    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
}


export function amount(category) {
    return get(`${url}/${category}?_sort=id&_order=desc`)
}



//POSTS

export function getPosts(options) {
    return Promise.all([
        get(`${url}/posts`, options),
        get(`${url}/posts`)
    ])
        .then(values => {
            return {
                count: values[1].length,
                items: values[0]
            }
        });
}



//POST

export function createPost(data) {
    return post(`${url}/posts`, data)
}

export function updatePost(data) {
    return patch(`${url}/posts/${data.id}`, data)
}

export function deletePost(id) {
    return del(`${url}/posts/${id}`)
}



//USERS

export function getUsers(options) {
    return Promise.all([
        get(`${url}/users`, options),
        get(`${url}/users`)
    ])
        .then(values => {
            return {
                count: values[1].length,
                items: values[0]
            }
        });
}

export function deleteUser(id) {
    return del(`${url}/users/${id}`)
}



//USER

export function getUser(login) {
    return get(`${url}/users?login=${login}`)
}

export function registerUser(data) {
    return post(`${url}/users`, data)
}