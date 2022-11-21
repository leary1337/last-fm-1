/**
 * Отправляет запрос на API сервер.
 * @param {string} url - Ссылка по которой осуществляется запрос.
 * @returns {*} - Данные в формате JSON.
 */
export const sendRequest = async (url) => {
    const response = await fetch(url);
    return await response.json();
};
