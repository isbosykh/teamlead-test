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

export function getPosts(page, paginate) {
    return get(`${url}/posts?_page=${page}&_limit=${paginate}&_sort=id&_order=desc`)
}

export function amount(category) {
    return get(`${url}/${category}?_sort=id&_order=desc`)
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



//USER

export function getUser(login) {
    return get(`${url}/users?login=${login}`)
}

export function getUsers() {
    return get(`${url}/users`)
}

export function registerUser(data) {
    return post(`${url}/users`, data)
}