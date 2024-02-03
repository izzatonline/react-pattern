export type HealthCheckResponse = {
  message: string;
};

export type LoginResponse = {
  token: string;
  message: string;
  data: {
    id: number;
    username: string;
    email: string;
    password: string;
    created_at: string;
  };
};

export type RegisterResponse = {
  message: string;
  data: {
    username: string;
    email: string;
  };
};

export type RegisterParams = {
  email: string;
  username: string;
  password: string;
};

export type LoginParams = {
  email: string;
  password: string;
};
