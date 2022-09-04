export interface LoginResponse {
  "jwt": string
}

export interface User {
  "id": number,
  "username": string,
  "firstname": string,
  "lastname": string,
  "address": string,
  "userPermissions": Permission[],
  "machines": Machine[]
}

export interface Permission {
  "id": number,
  "username": string,
  "permissionName": string
}

export interface PermissionFront {
  "id": number,
  "name": string
}

export interface Machine {
  "id": number,
  "userId": number,
  "name": string,
  "dateCreated": string,
  "status": string,
  "active": string,
  "available": string
}

export interface ErrorMessage {
  "id": number,
  "machineId": number,
  "timestamp": number,
  "operation": string,
  "message": string
}




