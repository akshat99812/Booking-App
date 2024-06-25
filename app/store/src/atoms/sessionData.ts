import { atom } from "recoil";

export const sessionAtom = atom<any>({
    key: "id",
    default: 0,
})