export interface ErrorPayload {
  message: string;
  details: { [key: string]: string };
}
