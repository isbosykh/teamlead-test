const url = 'http://localhost:3000';

function get(url) {
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



//POSTS

export function getPosts(paginate) {
    return get(`${url}/posts?_limit=${paginate}`)
}

export function getPost(id) {
    return get(`${url}/posts/${id}`)
}

export function createPost(data) {
    return post(`${url}/posts`, data)
}

export function updatePost(data) {
    return patch(`${url}/posts/${data.id}`, data)
}

export function deletePost(id) {
    return del(`${url}/posts/${id}`)
}



//USER

export function getUser(login) {
    return get(`${url}/users?login=${login}`)
}