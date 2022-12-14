import service from "./Api";

export const getIndex = async () => {
    const res = await service.get('/api/application/index')
    return res?.data;
}

export const signupUser = async (params) => {
    const res = await service.post(`/api/users/signup`, { ...params });
    return res?.data;
};

export const loginUser = async (params) => {
    const res = await service.post(`/api/users/login`, { ...params });
    return res?.data;
};

export const updateUser = async (params) => {
    const res = await service.post(`/api/users/update`, params);
    return res?.data;
}

export const getComments = async () => {
    const res = await service.get('/api/comments');
    return res?.data;
}

export const sentComment = async (params) => {
    const res = await service.post('/api/comments/add-comment', params);
    return res?.data;
}

export const sentRequest = async (params) => {
    const res = await service.post('/api/entry-and-exit/save-entry-and-exit', params);
    return res?.data;
}

export const getReports = async (params) => {
    const res = await service.post('/api/entry-and-exit/report-entry-and-exit', params);
    return res?.data;
}