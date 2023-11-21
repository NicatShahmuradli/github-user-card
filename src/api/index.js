import axios from "axios";

const API_URL = "https://github.com/users"

const githubToken =  "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"

export async function getUser(user) {
    const {data} = await axios.get(API_URL + user,{
        headers: {Authorization: `Bearer ${githubToken}`},
    });
    return data;
}