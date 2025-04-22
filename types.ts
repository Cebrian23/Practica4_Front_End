//Cambiamos created_at por createdAt y updated_at por updatedAt
export interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

//Cambiamos created_at por createdAt y updated_at por updatedAt
export interface Task {
  _id: string;
  title: string;
  description: string;
  status: TaskStatus;
  user: User;
  createdAt: string;
  updatedAt: string;
}

//Se añaden los estados "PENDING" y "COMPLETED" y se eliminan los estados de "TODO" y DOne
export enum TaskStatus {
  PENDING = "pending",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
}

export interface CreateTaskRequest {
  title: string;
  description?: string;
  status?: TaskStatus;
  user: string;
}

export interface UpdateTaskRequest {
  title?: string;
  description?: string;
  status?: TaskStatus;
  user?: string;
}

export interface UpdateTaskStatusRequest {
  status: TaskStatus;
}

export interface MoveTaskRequest {
  userId: string;
}
