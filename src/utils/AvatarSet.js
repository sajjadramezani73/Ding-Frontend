import manAvatar from '../assets/images/man.svg';
import womanAvatar from '../assets/images/woman.svg'
import { baseUrl } from "../constant"

// set Avater user or static avater
export const avatar = (user) => {
    if (user?.avatar !== '') {
        return baseUrl + '/' + user?.avatar
    } else {
        return user?.gender === "male" ? manAvatar : womanAvatar
    }
}