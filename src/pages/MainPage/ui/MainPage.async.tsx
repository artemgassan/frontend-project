import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // TODO: Искуственная задержка для тестов, delete
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
