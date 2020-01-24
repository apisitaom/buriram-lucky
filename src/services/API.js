import { Fetch } from './Fetch'

export const eventLuckyList = async (data, token = "") => {
    const res = await Fetch("GET", token, `/member/api/luckyevents`, data);
    return res;
};
export const eventLuckyData = async (data, token = "") => {
    const res = await Fetch("GET", token, `/member/api/luckyevent/${data}`, data);
    return res;
};
export const luckyeventCreate = async (data, token = "") => {
    const res = await Fetch("POST", token, `/member/api/luckyevent`, data);
    return res;
};