import { ApiRequestMock } from '../../shared/utils/api-mocks/api-mocks.models';

const data = {
  users: [
    {
      name: 'Sari Dillway',
      age: 82,
      email: 'sdillway0@ft.com',
      company: 'Apple',
      title: 'Desktop Support Technician',
      department: 'Accounting',
      createdAt: '10/16/2023',
      updatedAt: '8/14/2023',
      id: '4d5b9a1d-597c-4d1e-82be-02757836b226',
    },
    {
      name: 'Konstance Dawson',
      age: 84,
      email: 'kdawson1@sakura.ne.jp',
      company: 'Microsoft',
      title: 'Assistant Media Planner',
      department: 'Human Resources',
      createdAt: '8/1/2023',
      updatedAt: '7/12/2023',
      id: '1ff5416e-8634-4b84-b5e1-1e16042cc8d8',
    },
    {
      name: 'Kalindi Wonfar',
      age: 84,
      email: 'kwonfar2@elegantthemes.com',
      company: 'Apple',
      title: 'Desktop Support Technician',
      department: 'Marketing',
      createdAt: '2/16/2023',
      updatedAt: '1/14/2023',
      id: '80350fd5-525c-4a08-bd96-3c49fcacab16',
    },
    {
      name: 'Konstance Dawson',
      age: 84,
      email: 'kdawson1@sakura.ne.jp',
      company: 'Microsoft',
      title: 'Assistant Media Planner',
      department: 'Human Resources',
      createdAt: '8/1/2023',
      updatedAt: '7/12/2023',
      id: '1ff5416e-8634-4b84-b5e1-1e16042cc8d8',
    },
    ...Array.from({ length: 40 }, (_, i) => ({
      name: `User ${i + 1}`,
      age: Math.floor(Math.random() * 100),
      email: `user${i + 1}@example.com`,
      company: 'Microsoft',
      title: 'Assistant Media Planner',
      department: 'Human Resources',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      id: `${i + 1}`,
    }))
  ],
};

const urls = {
  users: '/users',
};

export const requests = {
  users: {
    method: 'GET',
    url: urls.users,
    response: data.users,
  } as ApiRequestMock,
  withoutUsers: {
    method: 'GET',
    url: urls.users,
    response: [],
  } as ApiRequestMock,
};
export const usersPageMocks = {
  data,
  urls,
  requests,
};
