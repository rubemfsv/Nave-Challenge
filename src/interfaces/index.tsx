export interface NaverProps {
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
  name: string;
  url: string;
}

export interface FormProps {
  title: string;
  naverData?: NaverProps;
  onSubmit: (body: object) => void;
}

export interface ResponseProps {
  id: string;
  user_id: string;
  job_role: string;
  name: string;
  url: string;
}

export interface AuthContextData {
  loged: boolean;
  handleAuth(value: boolean): void | null;
}

export interface NotificationProps {
  title: string;
  message: string;
}