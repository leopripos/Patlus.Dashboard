export interface FailurePayload {
  message: string;
  details: { [key: string]: string };
}
