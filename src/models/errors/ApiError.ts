export interface ApiError {
  code: string;
  key: string;
  message: string;
  status?: 400 | 401 | 404 | 422 | 500 | 503;
}
