import {Store} from 'pullstate';
import {App} from '@shared/types';

export const AppStore = new Store<App>({
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
    colorized: false,
    softskills: [['Думать', 'Потом делать'], ['Не знаю', 'Спрошу'], ['Понять', 'Найти подход'], ['Не понял', 'Уточню'],
        ['Идеал', 'Враг сроков'], ['Горькая правда', 'Лучше сладкой лжи'], ['Читаемость', 'Важнее скорости'], ['В споре', 'Рождается истина']],
    languages: [['Russian', 'Родной'], ['English', 'Чтение документации'], ['Czech', 'Весёлый']],
});

const stores = {
    app: AppStore,
};

type StoresKey = keyof typeof stores;

export const getStore = <K extends StoresKey>(key: K) => stores[key];
export const updateStore = (store: StoresKey, data: object) =>
    stores[store].update((s: object) => ({...s, ...data}));

export const changeTheme = () => {
    const {theme: oldTheme} = getStore('app').getRawState()
    document.body.classList.add(
        'theme', oldTheme === 'dark' ? 'light' : 'dark');
    document.body.classList.remove(oldTheme)
    updateStore('app', {theme: oldTheme === 'dark' ? 'light' : 'dark'})
}