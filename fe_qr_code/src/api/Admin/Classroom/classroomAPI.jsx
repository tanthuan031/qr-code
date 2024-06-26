import { concatQueryString } from '../../../utils/concatQueryString';
import { titleToSlug } from '../../../utils/titleToSlug';
import axiosClient from '../../axiosClient';
import { getCookiesAdmin } from '../Auth/authAPI';

export const configHeadersAuthenticate = () => {
  const token = getCookiesAdmin('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getAllClassroom = async ({ sort, search, page } = {}) => {
  const url = '/api/admin/classroom';
  const queryString = [];
  if (sort && sort.length > 0) {
    sort.forEach((item) => {
      queryString.push(`sort[${titleToSlug(item.key)}]=${item.value}`);
    });
  }
  if (search) {
    queryString.push(`search=${search}`);
  }
  if (page) {
    queryString.push(`page=${page}`);
  }
  const final_url = concatQueryString(queryString, url);

  const response = await axiosClient.get(final_url, configHeadersAuthenticate());
  if (response.status === 401) {
    return 401;
  } else if (response.status === 'success') {
    return response.data;
  } else {
    return 500;
  }
};

export const getClassroomById = async (id) => {
  const url = `/api/admin/classroom/${id}`;
  const response = await axiosClient.get(url, configHeadersAuthenticate());
  if (response.status === 'success') {
    return response.data;
  } else if (response.status === 401) {
    return 401;
  } else {
    return {};
  }
};
export const addClassroom = async (body) => {
  const url = '/api/admin/classroom';
  const response = await axiosClient.post(url, body, configHeadersAuthenticate());
  if (response.status === 401) {
    return 401;
  } else if (response.status === 'fail') {
    return 403;
  } else if (response.status === 'success') {
    return 200;
  } else if (response.status === 500) {
    return 500;
  } else {
    return 404;
  }
};

export const addDetailClassroom = async (body) => {
  const url = '/api/admin/classroom?add-class-detail';
  const response = await axiosClient.post(url, body, configHeadersAuthenticate());
  if (response.status === 401) {
    return 401;
  } else if (response.status === 'success') {
    return 200;
  } else if (response.status === 500) {
    return 500;
  } else {
    return 404;
  }
};

export const editAttendanceStudent = async (id, body) => {
  const url = `/api/admin/classroom/${id}`;
  const response = await axiosClient.put(url, body, configHeadersAuthenticate());
  if (response.status === 401) {
    return 401;
  } else if (response.status === 'success') {
    return 200;
  } else if (response.status === 500) {
    return 500;
  } else {
    return 404;
  }
};

// export const requireProduct = async (body) => {
//   const url = '/api/admin/product_import';
//   const response = await axiosClient.post(url, body, configHeadersAuthenticate());
//   if (response.status === 401) {
//     return 401;
//   } else if (response.status === 'success') {
//     return 200;
//   } else if (response.status === 500) {
//     return 500;
//   } else {
//     return 404;
//   }
// };

export const deleteClassroom = async (id) => {
  const url = `/api/admin/classroom/${id}`;
  const response = await axiosClient.delete(url, configHeadersAuthenticate());
  if (response.status === 'success') {
    return 200;
  } else if (response.status === 'fail') {
    return 404;
  } else {
    return 401;
  }
};

export const deleteDetailStudent = async (id) => {
  const url = `/api/admin/classroom/${id}?delete-details`;
  const response = await axiosClient.delete(url, configHeadersAuthenticate());
  if (response.status === 'success') {
    return 200;
  } else if (response.status === 'fail') {
    return 404;
  } else {
    return 401;
  }
};
