export interface Notificacao {
  message: string;
  type: 'success' | 'warning' | 'error'
}

export const TipoNotificacao = {
  "success": "success",
  "warning": "warning",
  "error"  : "error"
}

