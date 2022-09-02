export interface LoginResponse {
  "jwt": string
}

export interface User{
  "id": number,
  "username": string,
  "firstname": string,
  "lastname": string,
  "address": string,
  "userPermissions": string[],
  "machines": string[]
}

export interface Permission{
  "id": number,
  "name": string
}
