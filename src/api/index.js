import ajax from "./ajax"
const BASE_URL = "/api"
export const getMusic = ({ phone, password }) => {
    return ajax(`${BASE_URL}/login/cellphone`, { phone, password }, "post")

}